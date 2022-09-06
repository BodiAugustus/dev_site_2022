import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { showcase } from '../data/data';
import { useContext, useState } from 'react';
import { HeroContext } from '../providers/HeroContext';
import { NavbarContext } from '../providers/NavContext';

const Showcase = () => {
  const { readMore, setReadMore } = useContext(HeroContext);
  const { toggleMenu } = useContext(NavbarContext);
  return (
    <>
      {showcase.map(item => {
        const { id, name, image, link, github, description, date } = item;
        return (
          <div
            key={id}
            className={`flex flex-col justify-center border-4 border-indigo-300 rounded-md bg-slate-400 items-center mt-6 mx-auto
            xxs:w-[90vw] 
            sm:w-[85vw]
            md:w-[45vw]
            lg:w-[22vw]
            lg:h-[75vh]
            ${readMore[id] ? 'lg:h-[79vh]' : 'lg:h-[75vh]'} 
            xl:h-[75vh]
            ${readMore[id] ? 'xl:h-[78vh]' : 'xl:h-[75vh]'} 
            2xl:h-[54vh]
            ${readMore[id] ? '2xl:h-[57vh]' : '2xl:h-[54vh]'} 
            `}
          >
            <div className="items-center justify-center xs:p-3 sm:p-3">
              {!toggleMenu && (
                <div
                  className="border-2 relative  border-sky-900 rounded-md bg-white h-60  mt-3
        xxs:w-72 
        sm:w-80   
        md:w-64
        lg:w-48 lg:mt-1 
        xl:w-64 xl:-mt-1
        2xl:w-80
        "
                >
                  <Image
                    src={image}
                    // height={350}
                    // width={350}
                    layout="fill"
                    alt="test"
                    className="card-image"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="flex items-center">
                <h2 className="text-2xl md:text-2xl lg:text-xl text-sky-900 font-medium -mb-1">
                  {name} | {date}
                </h2>
              </div>
              <div className="flex text-center p-3 md:text-lg lg:text-base">
                <h4 className="">
                  {readMore[id]
                    ? description
                    : `${description.substring(0, 95)}...`}{' '}
                  <button
                    key={id}
                    className="px-2 my-1 py-[0.5]  text-md  text-sky-900 pb-1 bg-slate-200 rounded-xl font-medium md:text-lg lg:text-base xl:mt-3  "
                    onClick={() => setReadMore(id)}
                  >
                    {readMore[id] ? 'Show Less' : 'Show More'}
                  </button>
                </h4>
              </div>
              <div className="flex items-center text-white bg-sky-900 justify-between w-full p-3">
                <a href={github}>
                  <FiGithub className="ml-2 transition-all hover:scale-110 active:scale-100 text-xl md:text-2xl lg:text-xl" />
                </a>
                <a
                  className="mx-auto transition-all hover:scale-110  active:scale-100 md:text-xl lg:text-lg"
                  onClick={() => window.open(link)}
                  //   href={link}
                >
                  <h4 className="cursor-pointer">See For Yourself! &#8594;</h4>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Showcase;
