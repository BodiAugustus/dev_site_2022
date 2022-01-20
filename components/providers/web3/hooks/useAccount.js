import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {"0xc6753122e378dad96cabfae01e8d0643d2ea36b6b2f26dfedb5c5b7328ffb760" : true}

export const handler = (web3, provider) => () => {

    const {mutate, data, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null}, 
        async () => {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]

            if(!account){
                throw new Error("No accounts found! Please refresh browser or install MetaMask.")
            }
            
            // console.log(account);
            return account
        }
    )

    useEffect(() => {
        console.log("SUBSCRIBING TO EVENT")
        
        // provider?.on("accountsChanged",
        //  (accounts) => mutate(accounts[0] ?? null))
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)

        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    },[provider])

    return {
        
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        
    }
}