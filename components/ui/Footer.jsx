import Link from 'next/link'
import { useContext, useState} from 'react'
import { NavbarContext } from '../providers/NavContext'


const Footer = () => {
  const {toggleMenu} = useContext(NavbarContext)
    let time = new Date
   
    return (
        <footer className="h-[34vh] flex flex-col justify-center items-center text-2xl text-white bg-sky-900 pt-6 pb-2">
        <Link href="/" className="transition-all">
          <a className="neontext neonP font-cinzel text-4xl sm:text-4xl md:text-7xl lg:text-8xl cursor-default lg:mt-4 pb-10">Bodi Agustus</a>
        </Link>
        <div className=" w-full text-center translate-y-5 md:translate-y-16 lg:translate-y-2  ">
        {
          !toggleMenu && 

        <p className='bg-sky-900 md:-mt-4 text-xs lg:mt-4 '>Web3 Developer -	
&#169; {time.getFullYear()} </p>
        }
        </div>
  
  
        {/* <span data-text="Sprucey" className="neon_text">
          Sprucey
        </span> */}
      </footer>
    )
}

export default Footer