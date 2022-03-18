import Head from 'next/head'
import Image from 'next/image'

import { Navbar, Hero, Showcase, Skills, Services, Footer, ProjectCard } from '../components'





export default function Home() {
  return (

    <div>

    <Head>
      <title>Bodi&apos;s Place</title> 

      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    
    <div className="min-h-screen">
      <div className="image-bg">
        <Navbar/>
        <Hero/>
      </div>
      <ProjectCard/>
      <Skills/>
      <Services/>
      <Footer/>
      </div>

    </div>
  )
}