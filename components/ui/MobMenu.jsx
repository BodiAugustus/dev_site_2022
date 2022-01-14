import { useContext } from "react"
import { GiArcTriomphe, GiAncientColumns } from "react-icons/gi"
import {BsGithub, BsTwitter} from "react-icons/bs"
import { NavItem } from "./Navbar"
import {links} from '../data/data'
import { NavbarContext } from "../providers/NavContext"
import Image from 'next/image'

import Link from 'next/link'






const MobMenu = () => {
    const {toggleMenu, setToggleMenu} = useContext(NavbarContext)
    
   
    return (
<>

        {toggleMenu && 
        
      <div>
        <ul className="fixed top-0 -right-0 p-3 w-[100vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start rounded-md" >
      
        {/* <Sparkles
      color=""
      count={50}
      minSize={3}
      maxSize={7}
      overflowPx={20}
      fadeOutSpeed={20}
      flicker={false}
      className="z-50"
    /> */}
      <Image 
                    
                    src="/images/menuPic.jpg"
                    alt="logo"
                    
                    layout="fill"
                    className="flex -z-10 contrast-[.2] relative"
                    priority
                    
                >
                </Image>
        
            <li className="text-xl w-full my-2 text-slate-100 z-50"  >
        
                        <GiArcTriomphe 
                        
                        className="hover:text-slate-300 hover:scale-105 active:scale-100 z-50"
                    fontSize={48}
                    onClick={() => setToggleMenu(false)}
                    />
                    <p className="justify-start pl-2 text-sm font-cinzel">Exit</p>
                    </li>
 
 
        {links.map((item,index) => {
            const {id, name, url} = item
        return (

             <NavItem key={id} title={name} url={url} classProps="my-0 text-lg text-white text-3xl text-center mt-8
             hover:transition-all hover:duration-700
              hover:bg-slate-300  hover:underline-offset-4 hover:decoration-2 z-50 hover:bg-opacity-20" 
              onClick={() => {
                  window.r
              }} />
        )

        
              
    
        }
   
        )}

    <div className="flex xs:mt-24 sm:mt-20  justify-around  ">
        <a href="https://github.com/BodiAugustus" target="_blank" rel="noreferrer" className="z-50 cursor-pointer">
        <BsGithub fontSize={40} className="bg-transparent text-gray-200 hover:transition-all hover:text-slate-300 hover:scale-105 active:scale-100 cursor-pointer  "/>
        </a>

  
        <a href="https://twitter.com/BodiAugustus" target="_blank" rel="noreferrer" className="z-50 cursor-pointer">
        <BsTwitter fontSize={40} className="bg-transparent text-slate-200 z-50 cursor-pointer hover:transition-all hover:text-slate-300 hover:scale-105 active:scale-100" />
        </a>
    </div>
    <div className="text-center xs:mt-20 sm:mt-16">
    <Link href="/">
        <a  className="text-white cursor-pointer tracking-wider font-cinzel text-4xl underline underline-offset-4 decoration-sky-300 decoration-2 z-50 hover:transition-all hover:scale-105 active:scale-100">Bodi Augstus</a>
    </Link>
    <h4 className="text-white font-thin">Web3 Developer & DeFi Consultant</h4>
    </div>
    </ul>
        </div>
        }

        {       !toggleMenu &&                                   
                   <GiAncientColumns
                   
                    fontSize={48} className="text-white md:hidden cursor-pointer mr-4" onClick={() => setToggleMenu(true)}/>
                    
                    }
                    
        
</>
    )
}

export default MobMenu

