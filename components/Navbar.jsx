import { useState, useContext } from "react"
import { links } from "./data/data"
import MobMenu from "./MobMenu"


import {GiArcTriomphe, GiAncientColumns, GiAbacus} from "react-icons/gi"
import Image from 'next/image'
import { useRouter } from "next/router"

export const NavItem = ({title, classProps, url}) => {
    return (
        <a className={`mx-4 cursor-pointer ${classProps}`} href={url}>
            {title}
        </a>
    )
}

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)


    const sprucey = "https://www.sprucey.dev"
    const router = useRouter()
    return (
        <nav className="w-full md:justify-center justify-between items-center">
            <div className="md:flex-[0.5] flex relative justify-between items-center">
               <div className="ml-2 mt-2 inline-block" >
               <Image 
                    src="/images/logo.png"
                    alt="logo"
                    height={60}
                    width={45}
                    layout="fixed"
                    className="rounded-lg cursor-crosshair"
                    onClick={() => router.push(sprucey)}
                />
               </div>
               <div className="flex gap-3"><h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl font-cinzel">Bodi</h1>
               <h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl font-cinzel">Augustus</h1></div>
               <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                   {links.map((item, index) => (
                       <NavItem key={item + index} title={item.name} url={item.url}/>
                   ))}
                   <li className="bg-blue-500 shadow-lg shadow-blue-500/50  py-2 px-4 rounded-lg border-none outline-none cursor-pointer hover:bg-blue-600, hover:scale-110 active:scale-100">Connect Wallet</li>
               </ul>
               
               <div className="">
                   {!toggleMenu && (
                   <GiAncientColumns fontSize={48} className="text-white md:hidden cursor-pointer mr-4" onClick={() => setToggleMenu(true)}/> )

                   }

                   {toggleMenu && (
                        <MobMenu/>
                   )}
               </div>
            </div>
        </nav>
    )
}

export default Navbar