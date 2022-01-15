


import { useEffect } from "react"
import useSWR from 'swr'

const adminAddresses = {
    "0x07A99C98f464b836e0ad5aB4925114f3FCE21A7f": true
}


export const handlerToGetUserMetaAccnt = (web3, provider) => () => {

    const {data, mutate, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null}, 
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0] //data
        }
    )

    useEffect(() => {
        window.ethereum &&
        window.ethereum.on("accountsChanged",
        accounts => mutate(accounts[0] ?? null))
    },[mutate])
    return {
        account: { 
            data,
            isAdmin: (data && adminAddresses[data]) ?? false,
            mutate,
             ...rest
             }
    }
}