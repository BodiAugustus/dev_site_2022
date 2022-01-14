import Image from 'next/image'
import { useContext } from 'react'
import { NavbarContext } from '../providers/NavContext'

const Profile = () => {
    const {toggleMenu} = useContext(NavbarContext)
    return (
        <>

            {!toggleMenu &&
                <div className="flex flex-col w-full lg:w-[75%] lg:mx-auto p-4 h-full lg:h-[80%] md:mt-6 lg:mt-0">
               
                <h1 className="text-white mx-auto text-5xl lg:text-7xl font-marcellus  rounded-full mt-0 mb-1">Hi,</h1>
                 <div className=" w-full h-full relative  border-4 border-[#00bfff] rounded-full">
                     <Image
                     src={'/images/Bodi.jpg'}
                     alt='Pic of Bodi'
                     width="40%"
                     height="40%"
                     layout='responsive'
                     className='rounded-full '
                     priority
                     />
                     
                     
                 </div>
                 <h1 className="text-white mx-auto text-5xl font-marcellus rounded-full mt-2 mb-8 md:mb-12 lg:text-7xl">I&apos;m Bodi.</h1>
                 <hr/>
             </div>
            }
        </>
    )
}


export default Profile