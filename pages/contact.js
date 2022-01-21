import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Particles from "react-tsparticles";
import Link from 'next/link'
import Head from "next/head";




const Contact = () => {
  <Head>
  <title>Contact Me</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
  <meta name="msapplication-TileColor" content="#da532c"/>
  <meta name="theme-color" content="#ffffff"/> 
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
</Head>
 
        const particlesInit = (main) => {
          console.log(main);
      
          // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        };
      
        const particlesLoaded = (container) => {
          console.log(container);
        };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mesaage, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qxc0f31",
        "template_5kfpbfh",
        e.target,
        "user_HcxYpkAMyFpXwPy6bVPPe"
      )
      .then((res) => {
        window.location.href = "/";
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>

<Link  href="/">
           <a className="text-white text-medium bg-sky-400 px-1 pb-1 mx-4 absolute top-4   rounded-lg border-4 border-blue-300 hover:scale-105 active:scale-100 md:text-xl">Home</a>
       </Link>

      <Particles
      className="relative -z-10"    
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#024",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.7,
            },
          },
        },
        particles: {
          color: {
            value: "#00bfff",
          },
          links: {
            color: "#0ff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <main className="-mt-4 w-full p-4 h-full md:mt-10 lg:-mt-[10%] xl:-mt-16">
        <h2 className="text-center p-1 text-white text-3xl md:text-4xl xl:text-4xl w-[70%] mx-auto mb-1 mt-16 sm:mt-20">Question, idea or opportunity?</h2>
        <hr className="mb-4 mt-2 w-[50%] xl:w-[30%]  mx-auto border-2 border-[#00bfff]"/>
        <div className="w-full xs:h-[72vh] sm:h-[60vh] lg:h-[80vh] xl:h-[80vh] md:w-[70%] md: mx-auto bg-[#23455b] rounded-md shadow-lg border-2 border-blue-500">
          <h2 className="text-center p-1 text-white text-2xl md:text-3xl xl:text-3xl xl:mt-3">Let&apos;s talk about it.</h2>

          <form
            autoComplete="off"
            className="capitalize px-1"
            onSubmit={sendEmail}
          >
            <label className="pr-1 text-blue-300 text-xl md:text-2xl lg:text-xl xl:text-2xl md:ml-2">Your Name:</label>
            <input className="p-2 w-[95%] text-left mb-2 text-sky-900 border-2 ml-2  border-blue-300 rounded-lg text-xl md:text-2xl lg:text-xl xl:text-xl" type="text" name="name" />
            <br />
            <label className="p-1 lg:text-xl md:ml-2 w-[100%]  text-blue-300 mb-2 text-xl md:text-2xl xl:text-2xl">Your Email:</label>
            <input
              className="p-2 lg:text-xl w-[95%] text-LEFT mb-2 border-2 ml-2 text-sky-900 border-blue-300 rounded-lg text-xl md:text-2xl xl:text-xl"
              type="email"
              name="user_email"
            />
            <br />
            <label className="text-blue-300 text-xl md:text-2xl md:ml-2 xl:text-2xl lg:text-xl">Your message:</label>
            <textarea className="bg-blue-400 lg:text-xl xl:text-xl text-sky-900 w-[93.5%]  flex indent-2 rounded-md mb-1 mt-1 border-2 border-b-4  mx-3 text-xl md:text-2xl" name="message" rows="6" />
            <input className="px-1 py-1 mt-2 mr-2 tracking-wide text-white font-bold border-2 float-right border-sky-400 cursor-pointer transition-all rounded-xl hover:bg-sky-500 w-[20%] md:text-xl xl:text-xl xl:pb-[6px] sm:mt-[7%] md:w-[15%] md:absolute left-[65%] md:bottom-[25%] bottom-[138px]  lg:w-[200px] lg:bottom-[7.5%] lg:left-[420px] xl:left-[899px] xl:bottom-[6.5%] xl:w-[10%]"type="submit" value="Send" />
          </form>
        </div>
      </main>
      
    </>

    // {/* <Link to="/" classNameName="btn">
    //   Back to Lodge
    // </Link> */}
  );
};

export default Contact;