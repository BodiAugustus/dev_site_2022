import Head from "next/head"
import { Navbar, Footer, Profile, ImgBox, BookBox, WhatElse } from "../components"
import { Blog } from "../components"



export default function About(){


    return (
        <div className="bg-sky-900">
            <Head>
                <title>About Me</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className="md:grid md:grid-cols-10 md:w-full px-4">
            <div className="md:col-span-4">
            <Profile/>
            </div>
            <div className="md:col-span-6">
            <ImgBox/>
            </div>

            <div className="md:grid md:grid-cols-10 md:w-[100vw] ">
           <div className="md:col-span-8 mx-auto lg:col-span-10"> 
           <BookBox />
          </div>
           <div className="md:col-span-8 md:mx-auto lg:col-span-10"> 

            <Blog/>
          </div>
           </div>
            </div> 
            <WhatElse/>
            <Footer/>
        </div>
    )
}