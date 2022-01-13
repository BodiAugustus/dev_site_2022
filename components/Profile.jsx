import Image from 'next/image'

const Profile = () => {
    return (
        <div className="flex flex-col w-full p-4 h-full">
           
           <h1 className="text-white mx-auto text-5xl font-marcellus rounded-full mt-0 mb-1">Hi,</h1>
            <div className=" w-full h-full relative  border-4 border-slate-400 rounded-full">
                <Image
                src={'/images/Bodi.jpg'}
                alt='Pic of Bodi'
                width="40%"
                height="40%"
                layout='responsive'
                className='rounded-full '
                />
                
                
            </div>
            <h1 className="text-white mx-auto text-5xl font-marcellus rounded-full mt-2">I&apos;m Bodi.</h1>
        </div>
    )
}


export default Profile