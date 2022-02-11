
import { useContext, useState} from 'react'
import { NavbarContext } from '../providers/NavContext'
import { HeroContext } from '../providers/HeroContext'
import { Input, Showcase, CryptoCard, Loader,  } from '..'
import { useWeb3 } from '@components/providers/web3'
import { ButtonHero, ButtonSend } from "@components/ui"
import { useAccount } from '@components/hooks/web3'
import EthRates from './web3/ethRates'
import { useEthPrice } from "@components/hooks/useEthPrice"
import { useXmrPrice } from "@components/hooks/useEthPrice"
import { useFtmPrice } from '@components/hooks/useEthPrice'
import { useSPIRITPrice } from '@components/hooks/useEthPrice'
import { useSCRTPrice } from '@components/hooks/useEthPrice'
import { useBTCPrice } from '@components/hooks/useEthPrice'

import  Modal  from './modals/Modal'
import  Modal2 from './modals/Modal2'
import  Modal3 from './modals/Modal3'
import  Modal4 from './modals/Modal4'
import  Modal5 from './modals/Modal5'
import  Modal6 from './modals/Modal6'
import { withToast } from '@utils/toast'


const commonStyles = 'px-2 flex justify-center items-center border-[3px] border-sky-400 text-white bg-sky-600 hover:bg-sky-700 hover:transition-all tracking-wide xs:min-h-[90px] xs:min-w-[120px] sm:text-lg md:text-xl lg:text-base'

const makePayment = {
    amount: "",
    addressTo: "",
    message: ""
}

const _createFormState = (isDisabled = false, alert = "") => ({
    isDisabled, alert
})



const createFormState = ({amount, alert, addressTo}) => {

    if(Number(amount) < 0){
        return _createFormState(true, "Not a valid amount.")
    } 
    // else if(!addressTo || !amount){
    //     return
    // }
    //  else if(addressTo.length === 0){
    //     return _createFormState(true, "Not a valid address!")
    // } 

    return _createFormState()
}


    const Hero = () => {
    const [formData1, setFormData1] = useState({addressTo: '22', amount: '33', message: 'hey'})
    const {isLoadingWeb3, connect, requireInstall, contract } = useWeb3()

    const {toggleMenu} = useContext(NavbarContext)
    const [isLoading, setIsLoading] = useState(false)
    const {openModal, openModal2, openModal3, openModal4, openModal5,openModal6} = useContext(HeroContext) 

    const {account} = useAccount()
    const {eth} = useEthPrice()
    const {xmr} = useXmrPrice()
    const {ftm} = useFtmPrice()
    const {spirit} = useSPIRITPrice()
    const {scrt} = useSCRTPrice()
    const {btc} = useBTCPrice()


    const [paymentData, setPaymentData] = useState(makePayment)
    const formState = createFormState(paymentData)

    const notify = () => {
        const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve({transactionHash: "0x525c86788b4dd762aa734c2e158081cdd78e00a0462a423b5d0262613fd3cf1b"}), 4000));
        // const resolveWithSomeData = new Promise((resolve, reject) => setTimeout(() => resolve(new Error("Something went wrong..")), 4000));
        withToast(resolveWithSomeData)
    }

    const sendTransaction = async () => {
        try {
            // if(!web3) return alert("You must have MetaMask installed to send payments.")
            const { addressTo, amount, message} = formData1
            
        } catch (error) {
            console.error("Transaction failed!");
        }
        
    }

    const handleChange1 = (e, name) => {
        setFormData1((prevState) => ({...prevState,
            [name]:e.target.value}))
        }

        const handleSubmit = (e) => {
            const { addressTo, amount, message} = formData1
            e.preventDefault()
            if(!addressTo || !amount ) return 
        

            sendTransaction()
        }
    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-start justify-between py-10 px-4 
            md:p-20 md:py-8
            lg:flex-row 
            xl:p-16">
                {/* <Image
                    src="/images/test.png"
                    layout="fill"
                    alt="Hero BG"
                    className="relative -z-[0]"
                /> */}
                <div className="flex justify-start flex-col flex-1
                sm:w-full 
                md:mr-10">
                    
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-slate-50 text-gradient font-fatFace 
                    xxs:text-5xl 
                    sm:text-6xl sm:text-center sm:-mt-6 
                    md:text-7xl md:-mt-0 
                    lg:text-6xl 
                    xl:text-7xl xl:-mt-8'>Full Stack <br/> <span className='font-fatFace'>Web3</span> Developer</h1>
                    <h4 className='text-slate-50 mt-1 font-cinzel 
                    xxs:text-2xl 
                    sm:mx-auto 
                    md:text-3xl 
                    xl:mx-auto'>NextJS | Solidity</h4>
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
                    <ButtonHero
                    className="
                    xs:w-[160px] 
                    sm:w-[42%] sm:pb-[6px]"
                    onClick={() => window.open("https://metamask.io/download.html", "_blank")}>Install MetaMask</ButtonHero> 
                    :
                    <ButtonHero 
                    className="
                    xs:w-[180px] 
                    sm:w-[45%]"
                    onClick={connect}>Connect MetaMask</ButtonHero> 
                    }
                
                            
                    {!toggleMenu &&
                        <CryptoCard/>
                    }
                    <div className="p-5 -mt-5 w-full flex flex-col justify-start items-center rounded-lg
                    sm:w-[80%] sm:mx-auto
                    md:w-[80%] 
                    lg:w-[100%]"> 

                        <h4 className="text-white 
                        sm:text-center 
                        md:text-2xl 
                        lg:text-xl lg:text-center
                        ">Send a Payment <span className="font-bebes">( Only FTM Accepted )</span>:</h4>

                        {!toggleMenu && 
                        <>
                        <Input  
                            handleChange={handleChange1}
                            onChange={({target: {value}}) => {
                            setPaymentData({
                                ...paymentData,
                                addressTo: value
                            })
                        }}
                        value={paymentData.addressTo}
                        placeholder="Address To:" name="addressTo" type="text" id="addressTo"
                        

                        //   handleChange={handleChange} 

                        /> 

                        <Input  
                            handleChange={handleChange1}
                            onChange={({target: {value}}) => {
                            
                            setPaymentData({
                                ...paymentData,
                                amount: value
                            })
                        }} 
                            value={paymentData.amount}
                            placeholder="Amount in FTM:" name="amount" type="number" id="amount"
                        
                        //   handleChange={handleChange}
                                                                    
                            />


                        <Input 
                            handleChange={handleChange1}
                            onChange={({target : {value}}) => {
                            setPaymentData({
                                ...paymentData,
                                message: value
                            })
                        }} 
                            value={paymentData.message}
                            placeholder="Enter Message:" name="message" type="text" id="message"
                        //   handleChange={handleChange}
                        /> 

                        </>
                        }

                        <div className="h-[1px] w-[70%] bg-gray-300 my-2 mt-4"/>

                        {formState.alert &&
                        <div className="p-4 my-2 text-red-700 bg-red-300 rounded-lg text-sm">
                            {formState.alert}
                        </div>
                        }
                    
                        {isLoading && !toggleMenu ? (
                            <div className="items-center"><Loader size="md"/></div>
                        ) :
                        (
                            
                        <ButtonSend
                        
                        disabled={formState.isDisabled}
                        type="button"
                        onClick={handleSubmit
                            
                        //       (e) => {
                        //       notify()
                        //       handleSubmit()
                        //       alert(
                        //           `Your payment has been sent! The details are shown below:
                        //           ${JSON.stringify(paymentData)}`
                                
                        //       )
                        //     setPaymentData({
                        //         amount:"",
                        //         message: "",
                        //         addressTo: ""
                        //     })
                    
                            
                        //   }
                        
                        }                    
                        >
                        Send Now
                        
                        </ButtonSend>)
                        }

                    </div> 
                </div>
                            
                <div key='rightSideForDesktop'
                className='items-center
                md:grid md:grid-cols-2 md:-mt-10
                lg:grid-cols-6
                
                '
                >
                <div className="lg:col-span-6">

                    <h2 className='text-2xl font-bebes text-white text-center underline underline-offset-8 mt-2 md:mb-4 
                    xxs:mb-4
                    sm:text-3xl 
                    md:text-4xl md:mt-6
                    lg:text-3xl lg:mt-16 
                    xl:mt-0 '>Quick Scan:</h2>
                        {!toggleMenu && 
                        
                        <EthRates
                            eth={eth.data}
                            xmr={xmr.data}
                            ftm={ftm.data}
                            spirit={spirit.data}
                            scrt={scrt.data}
                            btc={btc.data}
                            /> 
                        }
                </div>

                        <div className="lg:col-span-6">
                        <h2 className='text-2xl font-bebes text-white text-center underline underline-offset-8 mt-2 -mb-4
                        sm:text-3xl 
                        md:text-4xl md:mt-12
                        lg:text-3xl lg:ml-12
                        xl:-mb-4'>At A Glance Services:</h2>

                        <div className="grid grid-cols-2 w-full mt-8 cursor-pointer
                        xxs:h-[35vh]
                        sm:grid-cols-2 sm:w-[90%] sm:mx-auto 
                        md:w-[95%] md:ml-4
                        lg:ml-8 lg:h-[28vh]
                        xl:w-[90%] xl:h-[40vh] xl:mx-auto ">
                            <div onClick={openModal} className={`rounded-tl-2xl ${commonStyles}`}>Fantom  </div>
                            <Modal  className='text-white'
                            />
                            <div className={`${commonStyles} rounded-tr-2xl`} onClick={openModal2}>Web3.0</div>
                            <Modal2
                                message="Hi from 2"
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
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Hero

    // const [formData, setFormData] = useState({addressTo: '', amount: '', message: ''})
  

    // const handleSubmit = (e) => {
    //     const {addressTo, amount, message} = formData
    //     e.preventDefault()

    //     if(!addressTo || !amount || !message) return;

    //     setFormData({addressTo: "d ", amount: ' d', message: 'd '})
    //     setIsLoading(true)
    //     alert('payment sent')

        
    // }
    // const handleChange = (e, name) => {
    //     setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    // }