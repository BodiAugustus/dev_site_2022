
import Image from 'next/image'
import { useState } from 'react'

const SIZES = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
}

const Loader = ({size = 'md'}) => {
    return (
        <div className={`spinner ${SIZES[size]}`}>
  <div className="dot1"></div>
  <div className="dot2"></div>
</div>
    )
}

export default function EthRates({eth, xmr, ftm, spirit, scrt, btc}){
    return (
        <div className="xs:grid xs:grid-cols-2 grid grid-cols-3 mb-7 text-white  mx-auto border-4 border-sky-400 p-4 bg-sky-600 rounded-xl xs:h-[55vh] sm:h-[45vh] sm:w-[90%] ms:w-[80%] md:h-[30vh] lg:h-[50vh] md:w-[90%] lg:mt-8">
            <div className="text-center ">
                <div className="p-2  drop-shadow rounded-md">
                    <div className="flex items-center">
                    { eth ? 
                       
                    <>

                        <Image
                        layout='fixed'
                        height="35"
                        width="35"
                        src="/images/ETH1.png"
                        alt='ETH logo'
                        // placeholder="blur"
                        blurDataURL="/images/ETH1.png"

                        />
                        <span className="xs:text-xl text-2xl font-bold xl:text-3xl">
                           &nbsp; = ${eth?.toFixed(0)}
                        </span>
                    </>
                    :  <Loader size="md" /> 
                    }
                    </div>
                    <p className="text-xl xs:text-lg xl:text-2xl xs:w-[80%] xs:mx-auto">Current ETH Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2  drop-shadow rounded-md">
                    <div className="flex items-center">
                    { ftm ? 
                        
                    <>

                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/FTM.png"
                    alt='FTM logo'
                    // placeholder="blur"
                    blurDataURL="/images/FTM.png"

                     />
                        <span className="text-2xl xs:text-xl  font-bold xl:text-3xl"> &nbsp; = ${ftm?.toFixed(2)}</span>
                    </>
                    : <Loader size="md" /> 
                    }
                    </div>
                    <p className="text-xl xs:text-lg xs:w-[70%] xs:mx-auto xl:text-2xl xl:w-full">Current FTM Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    { spirit ? 
                        
                    <>

                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/SPIRITs.png"
                    alt='XMR logo'
                    // placeholder="blur"
                    blurDataURL="/images/SPIRITs.png"

                     />
                        <span className="text-2xl xs:text-xl  font-bold xl:text-3xl">&nbsp; = ${spirit?.toFixed(3)}</span>
                    </>
                    : <Loader size="md" /> 
                    }
                    </div>
                    <p className="text-xl xs:text-lg xs:w-[70%] xs:mx-auto lg:w-full xl:text-2xl xl:w-full">Current SPIRIT Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    { xmr ? 
                        
                    <>
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/XMR1.png"
                    alt='SPIRIT logo'
                    // placeholder="blur"
                    blurDataURL="/images/XMR1.png"

                     />
                        <span className="text-2xl xs:text-xl  font-bold xl:text-3xl">&nbsp; = ${xmr?.toFixed(2)}</span>

                    </>
                    : <Loader size="md" /> 
                    
                    }
                    </div>
                    <p className="text-xl xs:text-lg xs:w-[70%] xs:mx-auto xl:text-2xl xl:w-full">Current XMR Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    { scrt ? 
                       
                    <>

                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/scrt1.png"
                    alt='XMR logo'
                    // placeholder="blur"
                    blurDataURL="/images/scrt1.png"

                     />
                        <span className="text-2xl xs:text-xl  font-bold xl:text-3xl">&nbsp; = ${scrt?.toFixed(2)}</span>
                    </>
                    :  <Loader size="md" /> 
                    }
                    </div>
                    <p className="text-xl xs:text-lg xs:w-[70%] xs:mx-auto xl:text-2xl xl:w-full">Current SCRT Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    { btc ? 
                        
                    <>

                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/btc.png"
                    alt='SCRT logo'
                    // placeholder="blur"
                    blurDataURL="/images/btc.png"
                     />
                    <span className="text-2xl xs:text-xl  font-bold xl:text-3xl">&nbsp; = ${btc?.toFixed(0)}</span>
                    
                    </>
                    : <Loader size="md" /> 
                    }
                    </div>
                    <p className="text-xl xs:text-lg xs:w-[70%] xs:mx-auto xl:text-2xl xl:w-full">Current BTC Price</p>
                </div>
            </div>
        </div>
    )
}