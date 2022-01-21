import { useContext } from "react"
import { HeroContext } from "../../providers/HeroContext"


const Modal6 = () => {
    const {openModal, showModal6, closeModal6} = useContext(HeroContext)
    return (<div className={` fixed top-0 left-0 w-full h-full bg-slate-400 bg-opacity-90 -z-10  items-center transition-all ${showModal6 ? 'show-modal' : 'hide-modal'}`  }>
        <div className="flex w-[50%]  sm:w-[90%] h-[50%] z-20 bg-stone-300 rounded-xl mx-auto translate-y-[50%]  opacity-100 xs:w-[90%] xs:h-[90%] xs:-mt-[75%] sm:-mt-[65%]
        sm:h-[80%] sm:text-lg lg:-mt-40 lg:w-[70%] lg:h-[75%] xl:-mt-[14%] md:h-[50%] md:mt-0">
    

            <h3 className="text-slate-700 p-6 w-full m-10 border-4 font-marcellus border-sky-900 first-letter:text-2xl indent-4 xs:text-md xl:text-3xl lg:text-2xl md:text-2xl lg:first-letter:text-5xl xl:first-letter:text-4xl sm:pt-[25%] md:pt-[10%] lg:pt-[4%] xl:pt-[8%]">A huge proponent of blockchains and their underlying technology since 2017, I&apos;ve read and studied numerous blockchain books as well as spent countless hours learning all things blockchain related. <h3 className="mt-3 first-letter:text-2xl xl:first-letter:text-4xl lg:first-letter:text-5xl xl:mt-4">My major focus is on decentralized finance.</h3></h3>
        
            <div className="text-white  w-1/4 transition-all hover:bg-sky-700 rounded-tr-xl rounded-br-xl bg-sky-900" >
            <button className="rotate-90 w-full h-full md:text-4xl md:tracking-wider xl:text-7xl hover:underline underline-offset-4 xs:text-2xl tracking-wide" onClick={closeModal6}>EXIT</button></div>
        </div>
    </div>)
}

export default Modal6