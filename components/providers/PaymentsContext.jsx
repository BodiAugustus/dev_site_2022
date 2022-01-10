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

    // console.log({
    //     provider,signer, paymentsContract
    // })
    return paymentsContract
}

export const PaymentsProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState("")
    const [formData, setFormData] = useState({addressTo: '', amount: '', message: ''})
    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(0)

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    }

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

    const sendPayment = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask wallet extension.")

            //get form data
            const {addressTo, amount, message} = formData
            const paymentContract = getEthereumContract()
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex,
                }]
            })

            const txHash = await paymentContract.addToChain(addressTo, parsedAmount, message)

            setIsLoading(true)
            console.log(`Loading - ${txHash.hash}`);
            await txHash.wait()
            setIsLoading(false)
            console.log(`Success - ${txHash.hash}`);

            const txCount = await paymentContract.getTXCount()

            setTransactionCount(txCount.toNumber())
            
        } catch (error) {
            console.error(error)
            throw new Error("No ethereum object dectected.")
        }
    }

    useEffect(() => {
        isWalletConnected()
    }, [])

    return (
        <PaymentsContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendPayment}}>
            {children}
        </PaymentsContext.Provider>
    )
}