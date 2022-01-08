import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Hero, Showcase, Skills, Services, Footer } from '../components'





export default function Home() {
  return (

    <div>

    <Head>
      <title>Bodi&apos;s Place</title> 
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/> 
    </Head>
    
    <div className="min-h-screen">
      <div className="bg-gradient-to-t from-teal-500 to-blue-700">
        <Navbar/>
      </div>
        <Hero/>
      <Showcase/>
      <Skills/>
      <Services/>
      <Footer/>
      </div>

    </div>
  )
}