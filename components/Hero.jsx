import {AiFillPlayCircle} from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import { Loader } from '.'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-wi[120px] flex justify-center items-center border-[0.5px] border-gray-700 text-white'
const Hero = () => {

    const connectWallet = () => {

    }
    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className='text-3xl xs:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-50 text-gradient font-fatFace'>Full Stack <br/> <span className='font-fatFace'>Web3</span> Developer</h1>
                    <h4 className='text-slate-100 font-cinzel'>NextJS | Solidity</h4>
                    <button key="connect" className="bg-blue-600 shadow-lg shadow-blue-500/75  py-2 w-1/2 mt-6 -mb-5
                     rounded-lg border-none outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none  text-white  md:hidden md:invisible  font-medium tracking-wider"
                     type='button'
                     onClick={connectWallet}
                     >Connect Wallet</button>
                     <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                         <div className={`rounded-tl-2xl ${commonStyles}`}>Ethereum | Fantom</div>
                         <div className={`${commonStyles} rounded-tr-2xl`}>Web3.0</div>
                         <div className={`${commonStyles} `}>dApps</div>
                         <div className={`${commonStyles} `}>MetaMask</div>
                         <div className={`${commonStyles} rounded-bl-2xl`}>DeFi | Crypto</div>
                         <div className={`${commonStyles} rounded-br-2xl`}>Blockchain</div>
                     </div>
                </div>
                
                <div key='rightSideForDesktop'>
                    <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 xs:w-72 w-full my-5 bg-slate-400 eth-card white-glassmorphism">a</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero