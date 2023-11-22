import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useWeb3 } from '@components/providers/web3';
import {
  Navbar,
  Hero,
  Showcase,
  Skills,
  Services,
  Footer,
  ProjectCard,
  Loader,
} from '../components';

const Loadera = () => {
  return (
    <div className="bg-blue-500 h-[100vh] w-[100vw] flex items-center justify-center text-center flex-col">
      {/* <h1 className="text-white mb-4 text-5xl ">Welcome!</h1> */}
      <h1 className="text-white mb-4 text-2xl ">One Moment Please...</h1>
      <Loader size="lg" />
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState({
    load: true,
    loadedOnce: false,
  });

  const loaded = () => {
    setTimeout(() => {
      setLoading({
        load: false,
        loadedOnce: true,
      });
    }, 1500);
  };
  useEffect(() => {
    loaded();
  }, []);

  return (
    <div className="max-w-[1536px] mx-auto">
      <Head>
        <title>Tristan&apos;s Place</title>
        <meta
          name="description"
          content="This is the personal developer website for Tristan Nettles. This online portfolio includes an array of recent and ongoing projects which were all made with the latest frameworks and up to date technology. "
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      {loading.load && !loading.loadedOnce ? (
        <Loadera />
      ) : (
        <div className="min-h-screen">
          <div className="image-bg">
            <Navbar />
            <Hero />
          </div>
          <ProjectCard />
          <Skills />
          <Services />
          <Footer />
        </div>
      )}
    </div>
  );
}
