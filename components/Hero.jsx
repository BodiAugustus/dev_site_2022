import {AiFillPlayCircle} from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import { Loader } from '.'
import { useContext } from 'react'
import { NavbarContext } from './providers/NavContext'
import { CryptoCard } from '.'
const commonStyles = 'min-h-[70px] px-2 xs:min-w-[120px] flex justify-center items-center border-[1.5px] border- text-white'
const Hero = () => {
    const {toggleMenu} = useContext(NavbarContext)

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

                    {!toggleMenu &&
                        <CryptoCard/>
                    }
                    <h1>hi</h1>
                </div>
                
                <div key='rightSideForDesktop'>
                     <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-5 ml-3">
                         <div className={`rounded-tl-2xl ${commonStyles}`}>Ethereum | Fantom</div>
                         <div className={`${commonStyles} rounded-tr-2xl`}>Web3.0</div>
                         <div className={`${commonStyles} `}>dApps</div>
                         <div className={`${commonStyles} `}>MetaMask</div>
                         <div className={`${commonStyles} rounded-bl-2xl`}>DeFi | Crypto</div>
                         <div className={`${commonStyles} rounded-br-2xl`}>Blockchain</div>
                     </div>

                </div>
            </div>
        </div>
    )
}

export default Hero