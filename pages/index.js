import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Hero, Showcase, Skills, Services, Footer } from '../components'





export default function Home() {
  return (

    <div>

    <Head>
      <title>Bodi&apos;s Place</title> 

      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    
    <div className="min-h-screen">
      <div className="bg-[url('https://res.cloudinary.com/bodi-web3/image/upload/v1642024685/test_jdkem4.png')]
      ">
        <Navbar/>
        <Hero/>
      </div>

      <Skills/>
      <Services/>
      <Footer/>
      </div>

    </div>
  )
}