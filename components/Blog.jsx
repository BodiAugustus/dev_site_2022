import {blogsPost} from './data/data'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react'
import { HeroContext } from './providers/HeroContext'
import { NavbarContext } from './providers/NavContext'

import {CgChevronLeftR, CgChevronRightR} from 'react-icons/cg'



const Blog = () => {
    const {readMore, setReadMore} = useContext(HeroContext)
    const [images, setImages] = useState(blogsPost)
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
    }, [index, images, ])

    useEffect(() => {
        setReadMore(false)
        let slider = setInterval(() => {
            setIndex(index + 1)
        } ,400000)
        return () => clearInterval(slider)
    }, [index, ])
    return (
       <>
           {!toggleMenu &&
            <section>
            <div className="">
                <h2 className='text-white text-center text-3xl mb-2 mt-8'>
                   
                    and I really ❤ DeFi!
                </h2>
            </div>
           <div className="w-[90vw] h-[90vh] my-2 mx-auto">
           <div className="my-0 mx-auto mt-2 w-[90vw] h-[90vh] max-w-[800px] text-center relative overflow-hidden flex border-4 rounded-xl border-[#00bfff]">
                {blogsPost.map((blog, blogIndex) => {
                    const {id, image, content, date} = blog
                    let position = 'nextSlide'
                    if(blogIndex === index){
                        position = 'activeSlide'
                    }
                    if(blogIndex === index - 1 || (index === 0 && blogIndex === blog.length - 1)){
                        position = "lastSlide"
                    }
                    return (
                    <article key={id} className={`absolute top-0 left-0 w-[100%] h-[100%] opacity-0 ${position} `}>
                    <div className="w-[100%] h-[28%]">
                    <Image
                    src={image}
                    width="100%"
                    height="50%"
                    layout='responsive'
                    alt={id}
                    
                    />
                    </div>
                   <div className="flex flex-col bg-[#142F43] h-full font-marcellus ">
                   <div className="flex flex-col text-center p-3 md:text-lg lg:text-base overflow-y-scroll h-[480px]">
                        <h2 className='text-white font-marcellus text-xl underline underline-offset-4'>{date}</h2>
                        <h4 className='text-white indent-8 first-letter:text-3xl px-2 font-medium overflow-y-scroll '>
                        { readMore ?
                            content :
                            `${content.substring(0, 620)}...`
                            }
                             <button className='px-2 my-2 mx-2   text-md text-sky-900 pb-[2px] bg-slate-200 rounded-xl font-medium md:text-lg lg:text-base xl:mt-3 mb-4' onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}
                             </button>
                        </h4>
                    </div>
                   </div>
                    
                    </article>
                    )
                })}
                <button className='prevA' onClick={() => {setIndex(index - 1)}}>
                    <CgChevronLeftR className='hover:bg-sky-900 rounded-xl transition-all'/>
                    
                </button>
                <button className='nextA' onClick={() => {setIndex(index + 1)}}>
                    <CgChevronRightR className='hover:bg-sky-900 rounded-xl transition-all'/>    
                </button>
            </div>
           </div>
        </section>
           }
       </>
    )
}

export default Blog