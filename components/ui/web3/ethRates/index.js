


export default function EthRates({eth, xmr, ftm}){
    return (
        <div className="grid grid-cols-3 mb-7 text-white  mx-auto ">
            <div className="text-center ">
                <div className="p-2  border-4 drop-shadow rounded-md">
                    <div className="">
                        <span className="text-2xl font-bold">
                            ETH = ${eth}
                        </span>
                    </div>
                    <p className="text-xl ">Current ETH Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2 border-4 drop-shadow rounded-md">
                    <div className="">
                        <span className="text-2xl font-bold">FTM = ${ftm}</span>
                    </div>
                    <p className="text-xl ">Current FTM Price</p>
                </div>
            </div>
            <div className=" text-center">
                <div className="p-2 border-4 drop-shadow rounded-md">
                    <div className="">
                        <span className="text-2xl font-bold">XMR = ${xmr}</span>
                    </div>
                    <p className="text-xl ">Current XMR Price</p>
                </div>
            </div>
        </div>
    )
}