import Image from 'next/image'
import { useState } from 'react'
import {picturesArray} from './data/data'
import {CgChevronLeftR, CgChevronRightR} from 'react-icons/cg'
import {CgChevronRightO} from 'react-icons/cg'


const ImgBox = () => {
    const [images, setImages] = useState(picturesArray)
    const [index, setIndex] = useState(0)
    return (
        <section>
            <div className="">
                <h2 className='text-white text-center text-3xl mb-2'>
                   
                    I&apos;ve lived in a lot of places...
                </h2>
            </div>
           <div className="w-[90vw] my-2 mx-auto">
           <div className="my-0 mx-auto mt-2 w-[80vw] h-[450px] max-w-[800px] text-center relative overflow-hidden flex">
                {picturesArray.map((picture, pictureIndex) => {
                    const {id, image, title, location} = picture
                    let position = 'nextSlide'
                    if(pictureIndex === index){
                        position = 'activeSlide'
                    }
                    if(pictureIndex === index - 1 || (index === 0 && pictureIndex === picture.length - 1)){
                        position = "lastIndex"
                    }
                    return (
                    <article key={id} className={`absolute top-0 left-0 w-[100%] h-[100%] opacity-0 ${position} `}>
                    <Image
                    src={image}
                    width="100%"
                    height="100%"
                    layout='responsive'
                    alt={title}
                    
                    />
                    <h4 className='text-white text-center text-xl -mb-2'>{title}</h4>
                    <p className='text-white text-center text-lg'>{location}</p>
                    
                    </article>
                    )
                })}
                <button className='prev'>
                    <CgChevronLeftR/>
                    
                </button>
                <button className='next'>
                    <CgChevronRightR/>    
                </button>
            </div>
           </div>
        </section>
    )
}

export default ImgBox