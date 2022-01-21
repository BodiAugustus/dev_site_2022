import { BsShieldCheck } from "react-icons/bs"
import {GiBeachBag} from 'react-icons/gi'
import {FiCheckCircle} from 'react-icons/fi'
import {GrStatusGood} from 'react-icons/gr'
import {FaMonero, FaEthereum} from 'react-icons/fa'
import { useContext} from 'react'
import { NavbarContext } from '../providers/NavContext'


import Link from 'next/link'

const ServiceCard = ({color, title, icon, message}) => (
    <div className="flex flex-row justify-start items-center p-3 m-2 cursor-pointer hover:shadow-xl white-glassmorphism lg:w-[80%] xl:w-[70%] lg:mb-4  ">
        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
                    <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl text-sky-900">{title}</h3>
                    <p className="mt-2 text-slate-900 text-md sm:text-lg lg:text-xl md:w-9/12">{message}</p>
        </div>
    </div>
)

const Services = () => {
    const {toggleMenu} = useContext(NavbarContext)
    return (
        <div className="flex flex-col w-full md:flex-row justify-center items-center bg-gradient-to-tr from-slate-200 to-stone-400
        -mt-10">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                <div className="mb-4 text-center text-sky-900 overline ">
                <h2 className='p-3 text-3xl text-sky-900 font-marcellus  underline-offset-8 underline sm:text-4xl sm:mt-1 '>Services Rendered</h2>
             
            </div>
                </div>
   

            <div className="flex-1 flex flex-col justify-start items-center">
            {!toggleMenu && 
            <>
            <ServiceCard 
                color='bg-[#22577E]'
                title="Superb Quality Products"
                icon={<FiCheckCircle  className="text-white text-xl lg:text-2xl mx-auto my-[10px] lg:my-[11.5px] "/>}
                message="Production grade applications that are custom crafted using only the most up to date technologies with performance always in mind."
            />
            <ServiceCard 
                color='bg-[#7267CB]'
                title="DeFi Centric dAPPs"
                icon={<FaEthereum  className="text-white text-xl lg:text-2xl mx-auto my-[10px] lg:my-[11.5px] "/>}
                message="Complete web3 capabilities starting from idea to smart contract design and deployment to secure online implementation with diagnostics handling."
            />
            <ServiceCard 
                color='bg-[#5584AC]'
                title="One Stop Shop"
                icon={<GiBeachBag  className="text-white text-xl lg:text-2xl mx-auto my-[10px] lg:my-[11.5px] "/>}
                message={`Offering full-stack services with zero outsourcing, including web hosting with data storage and resource management.`}
            />
            </>
            }
            </div>
            <Link href="/contact" >
                <a className="text-white bg-sky-800 px-5 py-3 rounded-full mt-4 -mb-4 border-4 border-sky-400 font-marcellus hover:-translate-y-1 active:translate-y-1 text-xl transition-all lg:text-2xl">Contact me</a>
            </Link>
            </div>
        </div>
    )
}

export default Services