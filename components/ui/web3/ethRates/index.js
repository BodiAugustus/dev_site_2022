
import Image from 'next/image'

export default function EthRates({eth, xmr, ftm, spirit, scrt, btc}){
    return (
        <div className="grid grid-cols-3 mb-7 text-white  mx-auto border-4 p-4 bg-slate-400 rounded-xl ">
            <div className="text-center ">
                <div className="p-2  drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/ETH1.png"
                    alt='ETH logo'

                     />
                        <span className="text-2xl font-bold">
                             = ${eth}
                        </span>
                    </div>
                    <p className="text-xl ">Current ETH Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2  drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/FTM.png"
                    alt='FTM logo'

                     />
                        <span className="text-2xl font-bold"> = ${ftm}</span>
                    </div>
                    <p className="text-xl ">Current FTM Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/SPIRITs.png"
                    alt='XMR logo'

                     />
                        <span className="text-2xl font-bold"> = ${spirit}</span>
                    </div>
                    <p className="text-xl ">Current SPIRIT Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/XMR1.png"
                    alt='SPIRIT logo'

                     />
                        <span className="text-2xl font-bold"> = ${xmr}</span>
                    </div>
                    <p className="text-xl ">Current XMR Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/scrt1.png"
                    alt='XMR logo'

                     />
                        <span className="text-2xl font-bold"> = ${scrt}</span>
                    </div>
                    <p className="text-xl ">Current SCRT Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2drop-shadow rounded-md">
                    <div className="flex items-center">
                    <Image
                    layout='fixed'
                    height="35"
                    width="35"
                    src="/images/btc.png"
                    alt='SCRT logo'

                     />
                        <span className="text-2xl font-bold"> = ${btc}</span>
                    </div>
                    <p className="text-xl ">Current BTC Price</p>
                </div>
            </div>
        </div>
    )
}