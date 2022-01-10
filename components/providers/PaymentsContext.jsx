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
    const [currentAccount, setCurrentAccount] = useState("")

    const isWalletConnected = async () => {
     
        try {
            if(!ethereum) return alert("Please install MetaMask!")

            const accounts = await ethereum.request({method: "eth_accounts"})
    
            if(accounts.length){
                setCurrentAccount(accounts[0])
                // getAllTransactions();
            } else{
                console.log("No accounts found!");
            }
    
            
        } catch (error) {
            console.error(error)
            throw new Error("No ethereum object dectected.")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask wallet extension.")
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.error(error)
            throw new Error("No ethereum object dectected.")
            
        }
    }

    useEffect(() => {
        isWalletConnected()
    }, [])

    return (
        <PaymentsContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </PaymentsContext.Provider>
    )
}