const { createContext, useContext, useState, useEffect, useMemo } = require("react")
import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { setupHooks } from "./hooks/setupHooks"



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
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoadingWeb3: false
                })
            }else{
                setWeb3Api(api => ({...api, isLoadingWeb3: false}))
                console.error("Please download MetaMask.");
            }
        }
        loadProvider()
    },[])

    
    const _web3Api = useMemo(() => {
        const { web3, provider} = web3Api

        return {
            ...web3Api,
            isWeb3Loaded: web3 != null,
            getHooks: () => setupHooks(web3, provider),
            connect: provider ? //connect helper function grabs meta
            async () => {
                try {
                  await provider.request({method: "eth_requestAccounts"})
                } catch (error) {
                    location.reload()
                }
            } 
            :
            () => {
                console.error("Cannot connect to MetaMask!");
            }
        }
    }, [web3Api])

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export const useWeb3 = () => {
    return useContext(Web3Context)
}

export function useHooks(callback){
    const {getHooks} = useWeb3()
    return callback(getHooks())
}

