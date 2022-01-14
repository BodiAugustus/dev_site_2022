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
                <h2 className='text-white text-center text-3xl mb-2 md:text-4xl lg:text-5xl md:mt-6'>
                   
                    I&apos;ve lived in a lot of places...
                </h2>
            </div>
           <div className="w-[90vw] my-2 mx-auto ">
           <div className="my-0 mx-auto mt-2 w-[90vw] h-[460px] md:h-[80vh] max-w-[800px] text-center relative overflow-hidden flex border-4 lg:h-[155vh] xl:h-[116vh] rounded-xl border-[#00bfff] ">
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
                    <article key={id} className={`absolute top-0 left-0 w-[100%] h-[100%] opacity-0 ${position}  `}>
                    <Image
                    src={image}
                    width="100%"
                    height="100%"
                    layout='responsive'
                    alt={title}
                    
                    />
                   <div className="flex flex-col bg-[#142F43] h-full  font-marcellus ">
                   <h4 className='text-white text-center text-2xl xs:mt-3 mt-7 md:text-4xl '>{title}</h4>
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