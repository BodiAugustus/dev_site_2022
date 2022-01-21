
import {BiRun} from 'react-icons/bi'
import {GiBlackBook, GiIsland} from 'react-icons/gi'


const WhatElse = () => {
    return(
        <>
  
        <h2 className="text-center mt-8 text-3xl md:text-4xl lg:text-5xl text-white font md:mb-2 md:-mt-[12vh] lg:mt-[20%] xl:mt-[16%] xs:-mt-[13%] sm:-mt-[15%] xl:mb-2">What else?</h2>
        <div className="flex flex-col  w-[90%] md:w-[75%] xl:w-[65%] border-4 mx-auto mt-1 rounded-xl border-[#00bfff] p-3 ">

            <ul className="px-1 text-white font-medium text-lg leading-6 md:text-xl lg:text-2xl xl:text-3xl">
                <li className="mb-3 flex items-center "><BiRun className='mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mx-3' fill='#00bfff'/>My favorite movie is{" "}  Forest Gump.</li>
                <li className="mb-3 flex items-center "><GiBlackBook fill='#00bfff' className='mx-2 text-2xl md:text-3xl  xl:mx-3lg:text-4xl xl:text-5xl'/>My favorite book is 
                The Count of Monte Cristo.</li>
                <li className=' flex items-center '><GiIsland fill='#00bfff' className='mx-2  xl:mx-3text-2xl md:text-3xl lg:text-4xl xl:text-5xl'/>My favorite place is Cave Hill, Abaco Bahamas.</li>
            </ul>
        </div>
        <h2 className="text-center mt-12 text-3xl md:text-4xl lg:text-5xl md:w-[80%] xl:w-[75%] md:mx-auto md:mt-16 px-3 lg:mb-6 xl:mb-8 text-white font">Want to learn more or seek my collaboration?</h2>
      <div className="flex justify-center items-center my-3 mb-4">
      <button onClick={() => window.open("/contact")}   className="text-white w-[30%] md:w-[20%] lg:w-[15%] xl:w-[15%] md:text-xl xl:text-2xl pb-[9px] md:pb-[11px] xl:pb-[14px] bg-sky-600 shadow-md shadow-blue-500/75 mt-4 border-[2px] p-2 border-sky-400 rounded-full cursor-pointer font-russon transition-all hover:scale-110 active:scale-100 tracking-wide font-medium xs:-mb-3  sm:-mb-4  lg:mb-6 md:border-4 ">Contact me</button>
      </div>
        </>
    )
}

export default WhatElse