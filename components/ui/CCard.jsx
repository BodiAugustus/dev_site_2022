import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { useWeb3Context } from "@components/providers"
import { handlerToGetUserMetaAccnt } from "@components/providers/web3/hooks/useAccount"

const CryptoCard = () => {
    const {web3} = useWeb3Context()
    const {account} = handlerToGetUserMetaAccnt(web3)()

    return (
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 xs:w-72 sm:h-52 sm:w-96 md:h-60 md:w-2/3 lg:w-full lg:h-44 xl:h-56  my-5 lg:my-4 bg-slate-400 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white flex justify-center items-center text-white tracking-wide">
                        
                        <h4 className="md:text-xl">DeFi</h4>

                    </div>
                    <BsInfoCircle className="xs:text-lg md:text-2xl" color="#fff"/>
                </div>
                <div>
                    <p className="text-white font-light text-sm md:text-lg">{account ? `Hi ${account}` : "Guest Card (Connect to MetaMask)"}</p>
                    <p className="text-white font-semibold text-lg md:text-xl mt-1">FTM Address</p>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default CryptoCard