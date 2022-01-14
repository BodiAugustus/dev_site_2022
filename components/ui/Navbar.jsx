import { useContext } from "react"
import { links } from "../data/data"
import MobMenu from "./MobMenu"
import { NavbarContext } from "../providers/NavContext"
import {GiGreekTemple} from "react-icons/gi"
import Image from 'next/image'
import { useRouter } from "next/router"
import { PaymentsContext } from "../providers/PaymentsContext"
import Link from "next/link"

export const NavItem = ({title, classProps, url, id}) => {
    return (
       <>
           <Link href={url}>
           <a key={id} className={` cursor-pointer font-marcellus sm:container xs:first-letter:text-5xl tracking-wider lg:text-2xl lg:first-letter:text-2xl xl:text-3xl xl:first-letter:text-4xl lg:first-letter:no-underline lg:tracking-wide md:text-xl md:first-letter:text-2xl md:first-letter:no-underline md:tracking-wide md:p-4   first-letter:underline transition-all md:hover:bg-blue-600 rounded-xl hover:rounded-md first-letter:underline-offset-4 first-letter:decoration-2 first-letter:decoration-sky-200 lg:relative lg:left-10
         ${classProps}`} >
            {title}
        </a>
           </Link>
       </>
    )
}

const Navbar = () => {
const {toggleMenu, setToggleMenu} = useContext(NavbarContext)
const {connectWallet, currentAccount} = useContext(PaymentsContext)


    const sprucey = "https://www.sprucey.dev"
    const router = useRouter()
    return (
        <nav className="w-full justify-between items-center">
            <div className="flex relative lg:justify-between justify-between items-center">
               <div className="ml-2 mt-2 inline-block" >
               <Image 
                    src="/images/logo.png"
                    alt="logo"
                    height={60}
                    width={45}
                    layout="fixed"
                    className="rounded-lg cursor-pointer"
                    onClick={() => router.push(sprucey)}
                />
               </div>
               <div className="flex gap-3 xs:text-center sm:ml-30 md:ml-0"><h1 className="text-white  font-bold tracking-wide uppercase first-letter:text-3xl xl:first-letter:text-5xl
                first-letter:text-stone-100 font-cinzel  xl:text-2xl ">Bodi</h1>
               <h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl font-cinzel first-letter:text-stone-100 xl:first-letter:text-5xl xl:text-2xl">Augustus</h1></div>
               <ul className="relative xs:l-10 text-white md:flex hidden  ">
                   {links.map((item, index) => (
                       <NavItem key={item + index + 1} title={item.name} url={item.url}/>
                   ))}
               </ul>
                   <button onClick={connectWallet} key="connect" className="bg-blue-600 shadow-2xl shadow-blue-500/75  py-2 px-4 rounded-lg  outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none relative lg:left-12 xl:left-14 text-white xs:invisible xs:hidden md:inline-block md:visible  md:text-xl font-medium border-sky-400 border-[3px]">{!currentAccount ? "Connect Wallet" : "Hello Friend"}</button>
               
               <div >
                   {!toggleMenu && (
                   <GiGreekTemple fontSize={48} className="text-white md:hidden cursor-pointer mr-4 hover:scale-105 active:scale-100" onClick={() => setToggleMenu(true)}/> )

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