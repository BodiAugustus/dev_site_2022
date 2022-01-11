import { BsShieldCheck } from "react-icons/bs"
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'

const ServiceCard = ({color, title, icon, message}) => (
    <div className="flex flex-row justify-start items-center p-3 m-2 cursor-pointer hover:shadow-xl bg-red-200 ">
        <div className={`w-10 h-10 rounded-full justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
                    <h3 className="mt-2 text-lg">{title}</h3>
                    <p className="mt-2 text-sm md:w-9/12">{message}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className="flex flex-col w-full md:flex-row justify-center items-center bg-gradient-to-br from-slate-200 to-stone-400">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-3xl ">Services I Offer</h1>
                </div>
   

            <div className="flex-1 flex flex-col justify-start items-center">
            <ServiceCard 
                color='bg-[#2952e3]'
                title="security stuff"
                icon={<BsShieldCheck fontSize={21} className="text-white mx-auto my-[10px] "/>}
                message="hey friendly friend"
            />
            <ServiceCard 
                color='bg-[#8984ff]'
                title="security stuff"
                icon={<BiSearchAlt fontSize={21} className="text-white mx-auto my-[10px] "/>}
                message="hey friendly friend"
            />
            <ServiceCard 
                color='bg-[#2952e3]'
                title="security stuff"
                icon={<RiHeart2Fill fontSize={21} className="text-white mx-auto my-[10px] "/>}
                message="hey friendly friend"
            />
            </div>
            </div>
        </div>
    )
}

export default Services