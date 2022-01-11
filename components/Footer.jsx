import Link from 'next/link'

const Footer = () => {

    return (
        <footer className="min-h-[25vh] flex justify-center items-center text-2xl text-white bg-sky-900">
        <Link href="/" className="transition-all">
          <a className="neontext neona">Magenta Spruce</a>
        </Link>
  
        {/* <span data-text="Sprucey" className="neon_text">
          Sprucey
        </span> */}
      </footer>
    )
}

export default Footer