import Image from 'next/image'
import {FiGithub} from 'react-icons/fi'
import {showcase} from '../data/data'
import {  useContext, useState } from 'react'
import { HeroContext } from '../providers/HeroContext'
import { NavbarContext } from '../providers/NavContext'





const Showcase = () => {
    const {readMore, setReadMore} = useContext(HeroContext)
    const {toggleMenu} = useContext(NavbarContext)
    return(
        <>
  {showcase.map((item) => {
    const {id, name, image, link, github, description, date} = item;
      return (
        <div key={id} className="flex flex-col  justify-center xs:w-[95%] sm:w-[11/12] ms:w-[70%] sm:mt-10 md:w-[95%]  lg:w-[97%] xl:w-[88%] xs:mx-auto border-4 border-slate-100 rounded-md bg-slate-400 items-center xs:mb-0 sm:-mb-2 xs:mt-6 lg:-mb-6 ">
        <div className="items-center justify-center xs:p-3 sm:p-3">
       {!toggleMenu &&
        <div className="border-2 relative  border-sky-900 rounded-md xs:w-72 sm:w-80   h-60 ms:h-72 w-60 md:w-64 bg-white">
        <Image 
            src={image}
            // height={350}
            // width={350}
            layout='fill'
            alt="test"
            className='card-image'
            
            />
        </div>
       }
        </div>
        <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center">
                <h2 className='text-2xl md:text-2xl lg:text-xl text-sky-900 font-medium -mb-1'>{name} | {date}</h2>
            </div>
            <div className="flex text-center p-3 md:text-lg lg:text-base">
                <h4>{ readMore ?
                    description :
                    `${description.substring(0, 100)}...`
                    } <button key={id} className='px-2 my-1 py-[0.5]  text-md text-sky-900 pb-1 bg-slate-200 rounded-xl font-medium md:text-lg lg:text-base xl:mt-3' onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}</button>
                    </h4>
            </div>
            <div className="flex items-center text-white bg-sky-900 justify-between w-full p-3">
            <a href={github}>
                <FiGithub  className='ml-2 transition-all hover:scale-110 active:scale-100 text-xl md:text-2xl lg:text-xl'/>
            </a>
                <a className='mx-auto transition-all hover:scale-110  active:scale-100 md:text-xl lg:text-lg'
                 onClick={() => window.open(link)}
                //   href={link}
                  >
                <h4 >See For Yourself! &#8594;</h4>
                </a>
            </div>
        </div>
    </div>
      )
  })}
    

  </>
    )
     
    
}

export default Showcase