
import { useContext, useState} from 'react'
import { NavbarContext } from '../providers/NavContext'
import { HeroContext } from '../providers/HeroContext'
import { Input, Showcase, CryptoCard, Loader,  } from '..'
import { useWeb3 } from '@components/providers/web3'
import { ButtonHero, ButtonSend } from "@components/ui"
import { useAccount } from '@components/hooks/web3'


import { useEthPrice } from "@components/hooks/useEthPrice"



import  Modal  from './modals/Modal'
import  Modal2 from './modals/Modal2'
import  Modal3 from './modals/Modal3'
import  Modal4 from './modals/Modal4'
import  Modal5 from './modals/Modal5'
import  Modal6 from './modals/Modal6'



const commonStyles = 'xs:min-h-[70px] px-2 xs:min-w-[120px]  flex justify-center items-center border-[2.5px] border- text-white bg-sky-600 hover:bg-sky-700 hover:transition-all tracking-wide sm:text-lg md:text-xl '


const Hero = () => {
const {isLoadingWeb3, connect, requireInstall } = useWeb3()
    const {toggleMenu} = useContext(NavbarContext)
    const [isLoading, setIsLoading] = useState(false)
    const {openModal, openModal2, openModal3, openModal4, openModal5,openModal6} = useContext(HeroContext) 
 
    const {account} = useAccount()
    const data = useEthPrice()
    console.log(data);



    
 


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
                    {/* {account} */}
                   {/* <EthRates eth={eth.data}/> */}
                    { isLoadingWeb3 ? 
                    <ButtonHero disabled={true} onClick={connect}>Loading...</ButtonHero> 
                    :
                    account.isAdmin ?
                    <ButtonHero disabled={true} hoverable={false} className='cursor-default hover:scale-100'>Hi Bodi!</ButtonHero> :
                    account.data ?
                    <ButtonHero disabled={true} hoverable={false} className='cursor-default hover:scale-100'>Hi Friend!</ButtonHero> 
                    :
                    requireInstall ?
                    <ButtonHero onClick={() => window.open("https://metamask.io/download.html", "_blank")}>Install MetaMask</ButtonHero> 
                    :
                    <ButtonHero onClick={connect}>Connect MetaMask</ButtonHero> 
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
                         (<ButtonSend type="button"

                     
                         >
                            Send Now 
                         </ButtonSend>)
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