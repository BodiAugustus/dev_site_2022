
import {BiRun} from 'react-icons/bi'
import {GiBlackBook, GiIsland} from 'react-icons/gi'

const WhatElse = () => {
    return(
        <>

        <h2 className="text-center mt-8 text-3xl text-white font">What else?</h2>
        <div className="flex flex-col  w-[90%] border-4 mx-auto mt-1 rounded-xl border-[#00bfff] p-3 ">

            <ul className="px-1 text-white font-medium text-lg leading-6">
                <li className="mb-3 flex items-center "><BiRun className='mx-2 text-2xl' fill='#00bfff'/>My favorite movie is{" "}  Forest Gump.</li>
                <li className="mb-3 flex items-center "><GiBlackBook fill='#00bfff' className='mx-2 text-2xl'/>My favorite book is 
                The Count of Monte Cristo.</li>
                <li className=' flex items-center '><GiIsland fill='#00bfff' className='mx-2 text-2xl'/>My favorite place is Cave Hill, Abaco Bahamas.</li>
            </ul>
        </div>
        <h2 className="text-center mt-12 text-3xl px-3 text-white font">Want to learn more or seek out my collaboration?</h2>
      <div className="flex justify-center items-center my-3 mb-4">
      <button    className="text-white w-[30%] pb-[9px] bg-sky-600 shadow-md shadow-blue-500/75 mt-4 border-[2px] p-2 border-sky-400 rounded-full cursor-pointer font-russon transition-all hover:scale-110 active:scale-100 tracking-wide font-medium ">Contact me</button>
      </div>
        </>
    )
}

export default WhatElse