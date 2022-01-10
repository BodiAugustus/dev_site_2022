import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import {contractABI, contractAddress} from '../../utils/constants'

export const PaymentsContext = createContext()

if (typeof window !== 'undefined'){
    const {ethereum} = window;
}

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const paymentsContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,signer, paymentsContract
    })
}

export const PaymentsProvider = ({children}) => {

    const isWalletConnected = async () => {
        if(!ethereum) return alert("Please install MetaMask!")

        const accounts = await ethereum.request({method: "eth_accounts"})

        console.log(accounts);
    }

    useEffect(() => {
        isWalletConnected()
    }, [])

    return (
        <PaymentsContext.Provider value={{value: 'test'}}>
            {children}
        </PaymentsContext.Provider>
    )
}