import { useState } from "react"
import { links } from "./data/data"

import {GiAbstract092,GiAbstract093} from "react-icons/gi"
import Image from 'next/image'
import { useRouter } from "next/router"

const NavItem = ({title, classProps, url}) => {
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
               <div className="flex gap-3"><h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl">Bodi</h1>
               <h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl">Augustus</h1></div>
               <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                   {links.map((item, index) => (
                       <NavItem key={item + index} title={item.name} url={item.url}/>
                   ))}
                   <li className="bg-blue-500 shadow-lg shadow-blue-500/50  py-2 px-4 rounded-lg border-none outline-none cursor-pointer hover:bg-blue-600, hover:scale-110 active:scale-100">Connect Wallet</li>
               </ul>
               
               <div className="">
                   {toggleMenu ? (
                   <GiAbstract092 fontSize={48} className="text-white md:hidden cursor-pointer mr-4" onClick={() => setToggleMenu(false)}/> )
                        :
                   
                   <GiAbstract093 fontSize={48} className="text-white md:hidden cursor-pointer mr-4" onClick={() => setToggleMenu(true)}/>
                   }

                   {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-0 p-3 w-[100vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start rounded-md bg-gradient-to-t from-slate-600 to-purple-700 text-red-600">
                        <li className="text-xl w-full my-2">
                            <GiAbstract093 onClick={() => setToggleMenu(false)} />
                        </li>
                        {links.map((item,index) => 
                             <NavItem key={item + index} title={item.name} url={item.url} classProps="my-2 text-lg text-white"/>
                        )}
                    </ul>
                   )}
               </div>
            </div>
        </nav>
    )
}

export default Navbar