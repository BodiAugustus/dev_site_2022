import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Hero, Showcase, Skills, Services, Footer } from '../components'


export default function Home() {
  return (
    <div>
    <Head>
      <title>Bodi&apos;s page</title>     
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