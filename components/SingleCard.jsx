import { FiGithub } from "react-icons/fi"
import Image from 'next/image'

const SingleCard = () => {
    return(
        <div key={id} className="flex flex-col md:flexjustify-center xs:w-3/4 md:w-[92%]   xs:mx-auto border-4 border-slate-100 rounded-md bg-slate-400 items-center  xs:mb-0 xs:mt-10">
        <div className="items-center justify-center p-4 ">
        <div className="border-2 border-sky-900 rounded-md">
        <Image 
            src={image}
            height={350}
            width={350}
            alt="test"
            className='card-image'
            
            />
        </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h2 className='text-2xl md:text-xl text-sky-900 font-medium -mb-2'>{name} | {date}</h2>
            </div>
            <div className="flex text-center p-3">
                <h4>{ readMore ?
                    description :
                    `${description.substring(0, 120)}...`
                    }</h4>
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
}

export default SingleCard