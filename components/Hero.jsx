
import { Loader } from '.'
import { useContext, useState} from 'react'
import { NavbarContext } from './providers/NavContext'
import { CryptoCard } from '.'
import { Input } from '.'
import Image from 'next/image'


const commonStyles = 'min-h-[70px] px-2 xs:min-w-[120px] flex justify-center items-center border-[1.5px] border- text-white'




const Hero = () => {
    const {toggleMenu} = useContext(NavbarContext)
    const [isLoading, setIsLoading] = useState(false)

    const connectWallet = () => {
    }

    const handleSubmit = (e) => {
        setIsLoading(true)

    }
    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                {/* <Image
                    src="/images/test.png"
                    layout="fill"
                    alt="Hero BG"
                    className="relative -z-[0]"
                /> */}
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className='text-3xl xs:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-slate-50 text-gradient font-fatFace'>Full Stack <br/> <span className='font-fatFace'>Web3</span> Developer</h1>
                    <h4 className='text-slate-50 mt-1 font-cinzel'>NextJS | Solidity</h4>
                    <button key="connect" className="bg-blue-600 shadow-lg shadow-blue-500/75  py-2 w-1/2 mt-6 -mb-5
                     rounded-lg border-none outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none  text-white  md:hidden md:invisible  font-medium tracking-wider"
                     type='button'
                     onClick={connectWallet}
                     >Connect Wallet</button>

                    {!toggleMenu &&
                        <CryptoCard/>
                    }
                    <div className="p-5 w-full flex flex-col justify-start items-center  rounded-lg"> 

                        <h4 className="text-white">Send a Payment <span className="font-bebes">( Only FTM Accepted )</span>:</h4>

                        {!toggleMenu && 
                        <>
                         <Input placeholder="Address To:" name="addressTo" type="text" handleChange={() => {}} /> 

                         <Input placeholder="Amount in FTM:" name="amount" type="number" handleChange={() => console.log("hi")} />


                         <Input placeholder="Enter Message:" name="message" type="text" handleChange={() => {}} /> 

                        </>
                        }

                         <div className="h-[1px] w-full bg-gray-300 my-2"/>

                         {isLoading && !toggleMenu ? (
                            <Loader/>
                         ) :
                         (<button type="button"
                         onClick={handleSubmit}
                         className="text-white w-1/2 bg-blue-600 shadow-sm shadow-zinc-400/75 mt-4 border-[2px] p-2 border-slate-300 rounded-full cursor-pointer font-russon transition-all hover:-translate-y-[2.5px] active:translate-y-1 tracking-wide"
                         >
                            Send Now 
                         </button>)
                         }

                     </div> 

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