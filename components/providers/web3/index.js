const { createContext, useContext, useEffect, useState, useMemo } = require("react");
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'

const Web3Context = createContext(null)

export default function Web3Provider({children}){

    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null, 
        isLoadingWeb3: true
    })

    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider()
            if(provider){
                const web3 = new Web3(provider)
                console.log(web3);
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoadingWeb3: false
                })

            }else{
                setWeb3Api(api => ({
                    ...api, isLoadingWeb3:false
                }))
                console.error("Please install MetaMask!");
            }
        }
        loadProvider()
    },[])

    const _web3Api = useMemo( () => {
        return {
            ...web3Api,
            isWeb3Loaded: !web3Api.isLoadingWeb3 && web3Api.web3,
            connect: web3Api.provider ? 
            async () => {
                try {
                    await web3Api.provider.request({method: "eth_requestAccounts"})
                } catch (error) {
                    location.reload()
                }
            } :
            () => console.error("Cannot connect to MetaMask!")
        }
    },[web3Api])
    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )

}

export function useWeb3(){
    return useContext(Web3Context)
}