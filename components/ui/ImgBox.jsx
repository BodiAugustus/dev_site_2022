import Image from 'next/image'
import { useState, useEffect, useContext } from 'react'
import {picturesArray} from '../data/data'
import {CgChevronLeftR, CgChevronRightR} from 'react-icons/cg'
import { NavbarContext } from '../providers/NavContext'


const ImgBox = () => {
    const [images, setImages] = useState(picturesArray)
    const [index, setIndex] = useState(0)
    const {toggleMenu} = useContext(NavbarContext)

    useEffect(() => {
       const lastIndex = images.length - 1
       if(index < 0){
           setIndex(lastIndex)
       }
       if(index > lastIndex){
           setIndex(0)
       }
    }, [index, images])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        } ,4000)
        return () => clearInterval(slider)
    }, [index])
    return (
        <>
        {!toggleMenu &&
            <section>
            <div className="">
                <h2 className='text-white text-center xs:text-2xl sm:text-3xl xs:-mb-1 mb-2 md:text-4xl lg:text-5xl md:mt-6 lg:mb-2 lg:mt-3 xl:mt-8'>
                   
                    I&apos;ve lived in a lot of places...
                </h2>
            </div>
           <div className="w-[90vw] my-2 mx-auto md:w-[90%]">
           <div className="flex mx-auto  mt-2 w-[90vw]
             xs:h-[35vh] md:w-[50vw] sm:h-[33vh] md:h-[30vh] lg:h-[62vh] xl:h-[67vh] md:mx-auto 
            max-w-[800px] text-center relative overflow-hidden  border-4  rounded-xl border-[#00bfff] ">
                {picturesArray.map((picture, pictureIndex) => {
                    const {id, image, title, location} = picture
                    let position = 'nextSlide'
                    if(pictureIndex === index){
                        position = 'activeSlide'
                    }
                    if(pictureIndex === index - 1 || (index === 0 && pictureIndex === picture.length - 1)){
                        position = "lastSlide"
                    }
                    return (
                    <article key={id} className={`absolute top-0 left-0 w-[100%] h-[100%] opacity-0 ${position}`}>
                    <Image
                    src={image}
                    width="100%"
                    height="55%"
                    layout='responsive'
                    alt={title}
                    
                    />
                   <div className="flex flex-col bg-[#142F43] h-full   font-marcellus ">
                   <h4 className='text-white text-center text-2xl xs:mt-2 mt-7 md:text-4xl '>{title}</h4>
                    <p className='text-white text-center text-lg md:text-xl'>{location}</p>
                   </div>
                    
                    </article>
                    )
                })}
                {/* <button className='prev' onClick={() => {setIndex(index - 1)}}>
                    <CgChevronLeftR className='hover:bg-sky-900 rounded-xl transition-all'/>
                    
                </button>
                <button className='next' onClick={() => {setIndex(index + 1)}}>
                    <CgChevronRightR className='hover:bg-sky-900 rounded-xl transition-all'/>    
                </button> */}
            </div>
           </div>
        </section>
        }
        </>
    )
}

export default ImgBox