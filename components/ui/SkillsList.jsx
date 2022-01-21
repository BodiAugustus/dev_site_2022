import { useContext, useState} from 'react'
import { NavbarContext } from '../providers/NavContext'

import {skills} from '../data/data'
import {FiChevronsRight} from 'react-icons/fi'
import {GiBlacksmith, GiScrollQuill, GiSpaceShuttle} from 'react-icons/gi'

const SkillsList = () => {

    const [value, setValue] = useState(0)
    const {toggleMenu} = useContext(NavbarContext)

    const {id, order, title, experience, stack, label} = skills[value]

    return (
        <section className='w-fill mt-0 mb-0 mx-auto pt-4  bg-gradient-to-br from-slate-200 to-stone-400'>
            <div className="mb-4 text-center text-sky-900 overline ">
                <h2 className='p-3 text-3xl text-sky-900 font-marcellus  underline-offset-4 underline sm:text-4xl xl:mt-4 xl:mb-6 '>Skill Sets</h2>
             
            </div>
            {!toggleMenu && 
            <>
            <div className=" relative">
           <div className="flex px-2 py-2 justify-center sm:justify-around text-2xl text-sky-900 sm:text-3xl lg:justify-center   -mt-4">
                {skills.map((skill, index) => {
                    return <button key={skill.id+1} className={`m-2 mb-3 ${index === value && 'active-btn'} px-2`} onClick={() => setValue(index)}>{skill.title}</button>
                })}
            </div>
            <div className="w-80 mx-auto max-w-screen-xl pb-3 sm:w-[80%] lg:w-[70%]">
                <article className='relative basis-4 pt-2 pb-4 text-sky-900 font-medium text-lg sm:text-xl'>
                    <div className="flex justify-between text-xl">
                    <div className="flex-col">
                    <h3  className='mt-1 mb-2 lg:text-2xl'>{title}</h3>
                    <h4 className='mt-1 bg-sky-900 text-white px-3 rounded-full py-[8px] sm:mb-4'>{label}</h4>
                    <p className='mt-1 lg:text-2xl'>{experience}</p>
                    </div>
                   {value === 0 && 
                    <GiScrollQuill  className='mr-6 text-sky-900 text-8xl lg:text-9xl'/> 
                   }
                   {value === 1 && 
                    <GiBlacksmith  className='mr-6 text-sky-900 text-8xl lg:text-9xl'/> 
                   }
                   {value === 2 && 
                    <GiSpaceShuttle  className='mr-6 text-sky-900 text-8xl lg:text-9xl '/> 
                   }
                    </div>
                    {skills.map((_, i = 0) => {
                        return (
                            <div key={i + 1} className="flex mt-4 ">
                               
                                <p className='my-auto flex lg:text-2xl' > <FiChevronsRight className='text-sky-500 items-center justify-center my-auto mr-2 text-lg lg:text-2xl' />{stack[i]}</p>
                            </div>
                        )
                    })}
                </article>
                <hr className='mt-2 xl:mt-6'/>
            </div>
           </div>
            </>
            }

        </section>
    )
}

export default SkillsList