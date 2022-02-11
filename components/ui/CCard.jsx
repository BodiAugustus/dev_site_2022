
import { BsInfoCircle } from "react-icons/bs"
import { useWeb3 } from "@components/providers/web3"


import { useAccount, useNetwork } from "@components/hooks/web3"
// import { useEthPrice } from "@components/hooks/useEthPrice"





const CryptoCard = () => {

    const {web3, isLoading, requireInstall} = useWeb3()
    const {account} = useAccount()
    const {network} = useNetwork()
    // const data = useEthPrice()
    // console.log(data);
    
    return (
        <div className="flex flex-col flex-1 items-center justify-start w-full mt-8
        md:mt-0 
        ">
        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 my-5 bg-slate-400 eth-card white-glassmorphism
        xs:w-80 
        sm:h-48 sm:w-[90%] 
        md:h-60 md:w-2/3 
        lg:w-[80%] lg:h-44 lg:my-4
        xl:h-56 
        2xl:w-[70%]">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center text-white tracking-wide
                    md:w-16 md:h-16 
                    lg:w-14 lg:h-14 ">
                        
                        <h4 className="md:text-xl">DeFi </h4>

                    </div>
                    {
                        requireInstall &&
                        <div className="bg-yellow-400 p-2 rounded-lg w-[60%] text-white font-semibold text-center
                        md:text-xl 
                        lg:text-base 
                        xl:text-xl
                    ">Cannot connect to network!</div>
                    }


                      { 
                          network.hasInitialResponse && !network.isSupported &&
                          <div className="bg-red-400 px-2 w-[80%] sm:w-[70%] mx-2 rounded-lg text-white md:text-xl lg:w-[80%] lg:text-base lg:mb-2 xl:text-xl">
                           <div className="">Wrong network,</div>
                           <div className="">Connect to: {` `}
                           <strong className="">{network.target}</strong>
                           </div>
                       </div>}


                    <BsInfoCircle className="xs:text-lg md:text-2xl" color="#fff"/>
                </div>
        
                <div>
                    <p className="text-white font-light text-sm ms:text-xl md:text-2xl lg:text-base xl:text-xl">
                        <strong>Hello, </strong>
                    { account.data ? account.isAdmin ? `Bodi!` : ` ${account.data.slice(0,6)}...${account.data.slice(36)}!` :  "Not Connected - Connect to MetaMask"}
                    {/* Hi {account.data} */}
                    </p>
                    <p className="text-white font-medium text-md ms:text-lg md:text-xl mt-1 lg:text-sm xl:text-lg">Currently on <span className="md:text-xl lg:text-sm xl:text-xl">{network.data ? network.data : "NOT CONNECTED"}</span></p>
                   
                    
                </div>

                
                
            </div>
        </div>
        </div>
    )
}

export default CryptoCard