import Image from 'next/image'


const ImgBox = () => {
    return (
        <div className="relative">
            <Image
            src="https://res.cloudinary.com/bodi-web3/image/upload/v1642023882/sample.jpg"
            width="50%"
            height="50%"
            layout='responsive'
            alt="Bodi "
            />
        </div>
    )
}

export default ImgBox