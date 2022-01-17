
import { BsInfoCircle } from "react-icons/bs"
import { useWeb3 } from "@components/providers/web3"


import { useAccount, useNetwork } from "@components/hooks/web3"





const CryptoCard = () => {

    const {web3, isLoading, requireInstall} = useWeb3()
    const {account} = useAccount()
    const {network} = useNetwork()
    
    return (
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 xs:w-72 sm:h-52 sm:w-96 md:h-60 md:w-2/3 lg:w-full lg:h-44 xl:h-56  my-5 lg:my-4 bg-slate-400 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white flex justify-center items-center text-white tracking-wide">
                        
                        <h4 className="md:text-xl">DeFi </h4>

                    </div>
                    {
                        requireInstall &&
                        <div className="bg-yellow-500 p-2 rounded-lg">Cannot connect to network, please install MetaMask!</div>
                    }


                      { 
                          network.hasInitialResponse && !network.isSupported &&
                          <div className="bg-red-400 p-2 rounded-lg text-white">
                           <div className="">Connected to wrong network,</div>
                           <div className="">Connect to: {` `}
                           <strong className="text-2xl">{network.target}</strong>
                           </div>
                       </div>}


                    <BsInfoCircle className="xs:text-lg md:text-2xl" color="#fff"/>
                </div>
        
                <div>
                    <p className="text-white font-light text-sm md:text-lg">

                    { account.data ? account.isAdmin ? `Hi Bodi!` : `Hi ${account.data}` :  "Not Connected - Connect to MetaMask"}
                    {/* Hi {account.data} */}
                    </p>
                    <p className="text-white font-medium text-md  mt-1">Currently on <span className="md:text-xl">{network.data}</span></p>
                   
                    
                </div>

                
                
            </div>
        </div>
        </div>
    )
}

export default CryptoCard