import { useState } from 'react'
import {skills} from './data/data'
import {FiChevronsRight} from 'react-icons/fi'
import {GiBlacksmith, GiScrollQuill, GiSpaceShuttle} from 'react-icons/gi'

const SkillsList = () => {

    const [value, setValue] = useState(2)

    const {id, order, title, experience, stack, label} = skills[value]

    return (
        <section className='w-fill mt-0 mb-0 mx-auto pt-4  bg-gradient-to-br from-slate-200 to-stone-400'>
            <div className="mb-4 text-center text-sky-900 overline ">
                <h2 className='p-3 text-3xl text-sky-900 font-marcellus  underline-offset-4 underline'>Skill Sets</h2>
             
            </div>
           <div className=" relative">
           <div className="flex px-2 py-1 justify-center text-2xl text-sky-900   -mt-4">
                {skills.map((skill, index) => {
                    return <button key={skill.id+1} className={`m-2 ${index === value && 'active-btn'} px-2`} onClick={() => setValue(index)}>{skill.title}</button>
                })}
            </div>
            <div className="w-80 mx-auto max-w-screen-xl pb-3">
                <article className='relative basis-4 pt-2 pb-4 text-sky-900 font-medium text-lg'>
                    <div className="flex justify-between text-xl">
                    <div className="flex-col">
                    <h3  className='mt-1'>{title}</h3>
                    <h4 className='mt-1 bg-sky-900 text-white px-3 rounded-full py-[8px] '>{label}</h4>
                    <p className='mt-1'>{experience}</p>
                    </div>
                   {value === 0 && 
                    <GiScrollQuill fontSize={80} className='mr-6 text-sky-900'/> 
                   }
                   {value === 1 && 
                    <GiBlacksmith fontSize={80} className='mr-6 text-sky-900'/> 
                   }
                   {value === 2 && 
                    <GiSpaceShuttle fontSize={80} className='mr-6 text-sky-900'/> 
                   }
                    </div>
                    {skills.map((_, i = 0) => {
                        return (
                            <div key={i + 1} className="flex mt-4 ">
                               
                                <p className='my-auto flex' > <FiChevronsRight className='text-sky-500 items-center justify-center my-auto mr-2 text-lg ' />{stack[i]}</p>
                            </div>
                        )
                    })}
                </article>
                <hr className='mt-2'/>
            </div>
           </div>

        </section>
    )
}

export default SkillsList