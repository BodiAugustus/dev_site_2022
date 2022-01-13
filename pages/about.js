import Head from "next/head"
import { Navbar, Footer, Profile, ImgBox, BookBox, Blog, WhatElse } from "../components"


export default function About(){
    return (
        <div className="bg-sky-900">
            <Head>
                <title>Bodi Web3</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/> 
            </Head>
            <Navbar />
            <Profile/>
            <ImgBox/>
            <BookBox/>
            <Blog/>
            <WhatElse/>
            <Footer/>
        </div>
    )
}