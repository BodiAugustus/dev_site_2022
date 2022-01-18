import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {"0xe1a4051152619c458ea339081747d92a7792fc6adda99a0218bb059bf21554ec" : true}

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