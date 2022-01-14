
import { useContext, useEffect, useState} from 'react'
import { NavbarContext } from '../providers/NavContext'
import { Input, Showcase, CryptoCard, Loader,  } from '..'
import { useWeb3 } from "@components/providers"


import  Modal  from './modals/Modal'
import  Modal2 from './modals/Modal2'
import  Modal3 from './modals/Modal3'
import  Modal4 from './modals/Modal4'
import  Modal5 from './modals/Modal5'
import  Modal6 from './modals/Modal6'
import { HeroContext } from '../providers/HeroContext'

const commonStyles = 'xs:min-h-[70px] px-2 xs:min-w-[120px]  flex justify-center items-center border-[2.5px] border- text-white bg-sky-600 hover:bg-sky-700 hover:transition-all tracking-wide sm:text-lg md:text-xl '

const Hero = () => {
    const {connect, isWeb3Loaded} = useWeb3()
    const {toggleMenu} = useContext(NavbarContext)
    const [isLoading, setIsLoading] = useState(false)
    const [currentAccount, setCurrentAcount] = useState(true)

    const {openModal, closeModal, openModal2, closeModal2, openModal3, closeModal3, openModal4, closeModal4, openModal5, closeModal5,openModal6, closeModal6} = useContext(HeroContext) 
 


    const [formData, setFormData] = useState({addressTo: '', amount: '', message: ''})
  

    const handleSubmit = (e) => {
        const {addressTo, amount, message} = formData
        e.preventDefault()

        if(!addressTo || !amount || !message) return;

        setFormData({addressTo: "d ", amount: ' d', message: 'd '})
        setIsLoading(true)
        alert('payment sent')

        
    }
    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    }
    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex  flex-col lg:flex-row items-start justify-between md:p-20 py-10 md:py-8 px-4 xl:p-16">
                {/* <Image
                    src="/images/test.png"
                    layout="fill"
                    alt="Hero BG"
                    className="relative -z-[0]"
                /> */}
                <div className="flex  justify-start flex-col sm:w-full md:mr-10 ">
                    
                    <h1 className=' xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl  lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-slate-50 text-gradient font-fatFace sm:text-center xl:-mt-8'>Full Stack <br/> <span className='font-fatFace'>Web3</span> Developer</h1>
                    <h4 className='text-slate-50 mt-1 font-cinzel sm:mx-auto sm:text-2xl md:text-3xl xl:mx-0'>NextJS | Solidity</h4>
                   
                   {isWeb3Loaded ? 
                    <button key="connect" className="bg-blue-600 shadow-lg shadow-blue-500/75  py-2 w-[40%] sm:w-[25%] sm:mx-auto mt-6 -mb-5
                     rounded-lg  outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none  text-white  md:hidden md:invisible  font-medium tracking-wider border-2 border-sky-400"
                     type='button'
                     onClick={connect}
                     >Connect Wallet</button> 
                     :
                     <button key="connect" className="bg-blue-600 shadow-lg shadow-blue-500/75  py-2 w-[40%] sm:w-[25%] sm:mx-auto mt-6 -mb-5
                     rounded-lg  outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none  text-white  md:hidden md:invisible  font-medium tracking-wider border-2 border-sky-400"
                     type='button'
                     onClick={connect}
                     >Install MetaMask</button> 
                    }
                 
                 

                    {!toggleMenu &&
                        <CryptoCard/>
                    }
                    <div className="p-5 w-full sm:w-[70%] md:w-[80%] lg:w-[100%] sm:mx-auto flex flex-col justify-start items-center  rounded-lg"> 

                        <h4 className="text-white md:text-2xl lg:text-xl lg:text-left lg:-mt-7">Send a Payment <span className="font-bebes">( Only FTM Accepted )</span>:</h4>

                        {!toggleMenu && 
                        <>
                         <Input placeholder="Address To:" name="addressTo" type="text" handleChange={handleChange} /> 

                         <Input placeholder="Amount in FTM:" name="amount" type="number" handleChange={handleChange} />


                         <Input placeholder="Enter Message:" name="message" type="text" handleChange={handleChange} /> 

                        </>
                        }

                         <div className="h-[1px] w-full bg-gray-300 my-2"/>

                         {isLoading && !toggleMenu ? (
                            <Loader/>
                         ) :
                         (<button type="button"
                         onClick={handleSubmit}
                         className="text-white w-[35%] md:w-[45%] bg-blue-600 shadow-md shadow-blue-500/75 mt-4 border-[2px] p-2 border-sky-400 rounded-full cursor-pointer font-russon transition-all hover:scale-110 active:scale-100 tracking-wide sm:px-3 md:text-2xl md:py-2  md:mt-8 lg:w-[70%] xl:w-[50%] lg:pb-3"
                         >
                            Send Now 
                         </button>)
                         }

                     </div> 

                </div>
                 
                
                <div key='rightSideForDesktop'>

                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bebes text-white text-center underline underline-offset-8 mt-2 -mb-4 xl:-mb-4 sm:-mb-1'>At A Glance Services:</h2>
                       
                       
                      
                    
                     <div className="grid sm:grid-cols-2 grid-cols-2 w-full xl:w-[85%] xl:mx-auto mt-8 cursor-pointer">
                         <div   onClick={openModal} className={`rounded-tl-2xl ${commonStyles}`}>Ethereum | Fantom  
                         
                         </div>
                         <Modal 
                        
                         className='text-white'
                         />
                         <div className={`${commonStyles} rounded-tr-2xl`} onClick={openModal2}>Web3.0</div>
                         <Modal2
                             message="please work"
                         />
                         
                        
                         <div className={`${commonStyles} `} onClick={openModal3}>dApps</div>
                         <Modal3
                             message="hi from 3"
                         />
                       
                         <div className={`${commonStyles} `}
                         onClick={openModal4}>MetaMask</div>
                         <Modal4 
                             message="hi from 4"
                         />
                         <div className={`${commonStyles} rounded-bl-2xl`} onClick={openModal5}>DeFi | Crypto</div>
                         <Modal5 
                             message="hi from 5"
                         />
                         <div className={`${commonStyles} rounded-br-2xl`} onClick={openModal6}>Blockchain</div>
                         <Modal6
                         message='hi from 6'
                         />
                     </div>
                     <h1 className='text-white text-center mt-8 -mb-2  underline underline-offset-8 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bebes xl:mt-8 xl:-mb-6'>Featured Projects</h1>
                     <div className="sm:grid sm:grid-cols-2">
                     <Showcase/>
                     
                    
                    

                     </div>

                </div>
            </div>
        </div>
    )
}

export default Hero