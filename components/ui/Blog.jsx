import {blogsPost} from '../data/data'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react'
import { HeroContext } from '../providers/HeroContext'
import { NavbarContext } from '../providers/NavContext'

import {CgChevronLeftR, CgChevronRightR} from 'react-icons/cg'



const Blog = () => {
    const {readMore1, setReadMore1} = useContext(HeroContext)
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
        setReadMore1(false)
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
                <h2 className='text-white text-center xs:text-2xl sm:text-3xl xs:-mb-1 mb-2 mt-8 md:text-4xl lg:text-5xl lg:mb-3 md:-mt-6 md:ml-[20%] lg:mt-[1.5%] xl:mt-[3%]'>
                   
                    and I really ❤ DeFi!
                </h2>
            </div>
           <div className="w-[90vw] h-[90vh]   md:h-[75vh] lg:h-[70vh] md:mx-[10%]  my-2 mx-auto">
           <div className="my-0 mx-auto mt-2 w-[90vw] xs:h-[80vh] max-w-[850px] sm:h-[80vh] md:h-[60vh] md:w-[75vw] lg:w-[50vw] lg:h-[100vh] xl:h-[88vh] text-center relative overflow-hidden flex border-4 rounded-xl  border-[#00bfff]">
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
                    <div className="w-[100%] xs:h-[27%] sm:h-[25%] md:h-[33.5%] lg:h-[26%] xl:h-[38%]">
                    <Image
                    src={image}
                    width="100%"
                    height="50%"
                    layout='responsive'
                    alt={id}
                    
                    />
                    </div>





                   <div className="flex flex-col bg-[#142f43] xs:h-[58vh] sm:h-[60vh] md:h-[33vh] lg:h-[60vh] xl:h-[46vh] overflow-y-scroll font-marcellus md:mt-20 ">





                   <div className="flex flex-col text-center p-3 md:text-lg lg:text-base overflow-y-scroll sm:h-[100vh] md:h-[380px] ">
                        <h2 className='text-white font-marcellus text-xl md:text-2xl underline underline-offset-4 xs:mb-3 md:mb-1 lg:text-xl xl:text-3xl lg:mt-4 xl:mb-4'>{date}</h2>
                        <h4 className='text-white indent-8 first-letter:text-3xl px-2 font-medium overflow-y-scroll
                        xs:text-base
                         sm:text-lg md:text-base xl:text-2xl xl:px-4 '>
                        { readMore1 ?
                            content :
                            `${content.substring(0, 620)}...`
                            }
                             <button className='px-2 my-2 mx-2   text-md text-sky-900 pb-[2px] bg-slate-200 rounded-xl font-medium md:text-lg lg:text-base  xl:mt-3 mb-4' onClick={() => setReadMore1(!readMore1)}>{readMore1 ? "Show Less" : "Show More"}
                             </button>
                        </h4>
                    </div>
                   </div>
                    
                    </article>
                    )
                })}
                <button className='absolute  top-[110px] md:top-[210px] l-[293px] lg:top-[33%] translate-x-[10%] my-0 mx-1 w-[2.95rem] h-[1.25rem] grid items-center text-5xl cursor-pointer transition-all  text-[#00bfff] ' onClick={() => {setIndex(index - 1)}}>
                    <CgChevronLeftR className='hover:bg-sky-900 rounded-xl transition-all'/>
                    
                </button>
                <button className='absolute top-[110px] md:top-[210px] xs:left-[80%] sm:left-[298px] md:left-[500px] lg:left-[87%] xl:left-[89%] lg:top-[33%] translate-x-[10%] my-0 mx-1 w-[2.95rem] h-[1.25rem] grid items-center text-5xl cursor-pointer transition-all  text-[#00bfff]' onClick={() => {setIndex(index + 1)}}>
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