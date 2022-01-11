import Image from 'next/image'
import {FiGithub} from 'react-icons/fi'
import {showcase} from './data/data'
import {  useContext } from 'react'
import { HeroContext } from './providers/HeroContext'
import { NavbarContext } from './providers/NavContext'

const Showcase = () => {
    const {readMore, setReadMore} = useContext(HeroContext)
    const {toggleMenu} = useContext(NavbarContext)
    return(
        <>

        
        <h1 className='text-white text-center mt-8 -mb-2  underline underline-offset-8 text-2xl font-marcellus'>Featured Projects</h1>
  {showcase.map((item) => {
    const {id, name, image, link, github, description, date} = item;
      return (
        <div key={id} className="flex flex-col md:flexjustify-center xs:w-3/4 md:w-[92%]   xs:mx-auto border-4 border-slate-100 rounded-md bg-slate-400 items-center  xs:mb-0 xs:mt-6">
        <div className="items-center justify-center p-4 ">
       {!toggleMenu &&
        <div className="border-2 relative  border-sky-900 rounded-md h-60 w-60">
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
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h2 className='text-2xl md:text-xl text-sky-900 font-medium -mb-2'>{name} | {date}</h2>
            </div>
            <div className="flex text-center p-3">
                <h4>{ readMore ?
                    description :
                    `${description.substring(0, 100)}...`
                    } <button className='px-2 my-1 py-[0.5]  text-md text-sky-900 pb-1 bg-slate-200 rounded-xl font-medium' onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}</button>
                    </h4>
            </div>
            <div className="flex items-center text-white bg-sky-900 justify-between w-full p-3">
            <a href={github}>
                <FiGithub fontSize={20} className='ml-2'/>
            </a>
                <a className='mx-auto' href={link}>
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