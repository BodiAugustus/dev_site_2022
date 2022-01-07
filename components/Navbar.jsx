import {GiAbstract092,GiAbstract093} from "react-icons/gi"
import logo from '../public/images/logo.png'
import Image from 'next/image'
import { Router, useRouter } from "next/router"

const Navbar = () => {
    const sprucey = "https://www.sprucey.dev"
    const router = useRouter()
    return (
        <nav className="w-full flex md:justify-center justify-between items-center">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
               <div className="ml-2 mt-2">
               <Image 
                    src="/images/logo.png"
                    alt="logo"
                    height={45}
                    width={45}
                    layout="fixed"
                    className="rounded-lg cursor-crosshair"
                    onClick={() => router.push(sprucey)}
                />
               </div>
            </div>
        </nav>
    )
}

export default Navbar