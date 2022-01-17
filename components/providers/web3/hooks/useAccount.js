import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {"0xe1a4051152619c458ea339081747d92a7792fc6adda99a0218bb059bf21554ec" : true}

export const handler = (web3, provider) => () => {

    const {mutate, data, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null}, 
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    useEffect(() => {
        provider &&
        provider.on("accountsChanged",
         (accounts) => mutate(accounts[0] ?? null))
    },[provider])

    return {
        
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        
    }
}