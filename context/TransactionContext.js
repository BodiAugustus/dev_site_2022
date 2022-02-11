// import { BigNumber, Contract, providers, utils, ethers } from 'ethers'
// import Head from 'next/head'
// import React, {useEffect, useRef, useState } from 'react'
// import { contractABI, contractAddress } from '@utils/constants'
// import Web3Modal from 'web3modal'


// export const TransactionContext = React.createContext()

// // const getEthereumContract = async () => {
    
// //     const provider = await web3ModalRef.current.connect()
// //     const web3Provider = new providers.Web3Provider(provider)
// //     const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)
// //     const { chainId } = await web3Provider.getNetwork()
// //         if(chainId !== 4){
// //             window.alert("Change the network to Rinkeby!")
// //             throw new Error("Change network to rink baby")
// //         }

// //         if (needSigner) {
// //             const signer = web3Provider.getSigner()
// //             return signer;
// //         }
// //         console.log(provider, signer);
// //         console.log(transactionsContract);

// //         return web3Provider
// // }

// export const TransactionProvider = ({children}) => {
//     const [ currentAccount, setCurrentAcount] = useState("")
//     const zero = BigNumber.from(0)
//     const [walletConnected, setWalletConnected] = useState(false)
//     const [loading, setLoading] = useState(false)
//     const web3ModalRef = useRef()
//     const [connectedAccount, setConnectedAccount] = useState("")

//     const getProviderOrSigner = async (needSigner = false ) => {
//         //connect to metamask using current
//         const provider = await web3ModalRef.current.connect()
//         const web3Provider = new providers.Web3Provider(provider)
//         const { chainId } = await web3Provider.getNetwork()
//         if(chainId !== 4){
//             window.alert("Change the network to Rinkeby!")
//             throw new Error("Change network to rink baby")
//         }

//         if (needSigner) {
//             const signer = web3Provider.getSigner()
//             return signer;
//         }

//         return web3Provider
//     }


//     const connectWallet = async () => {
//         try {
//             await getProviderOrSigner()
//             setWalletConnected(true)
//             console.log("hi");
//         } catch (error) {
//             console.error(error);
//             // location.reload()
//         }
//     }


//     useEffect(() => {
//         if (!walletConnected){
//             //assign web3modal class to ref object by setting current vsalue
//             web3ModalRef.current = new Web3Modal({
//                 network: "rinkeby",
//                 providerOptions: {},
//                 disableInjectedProvider: false,
//             })
//         }
//         // connectWallet()
//     }, [walletConnected])

//     return (
//         <TransactionContext.Provider value={{connectWallet, getProviderOrSigner}}>{children}</TransactionContext.Provider>
//     )
// }


