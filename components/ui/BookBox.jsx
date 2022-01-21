import {useEffect, useRef} from 'react';

export default function BookBox() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            initialDoc: 'https://res.cloudinary.com/bodi-web3/image/upload/v1642785677/Teaser_qhp5lm.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent relative  px-5  md:w-[50vw] xl:w-[32vw] xs:w-[93vw] xs:px-3 ">
        <div className="header text-center text-white xs:text-2xl sm:text-3xl mt-10 mb-2 md:text-4xl md:mb-3 md:mt-8 lg:-ml-[29vw] lg:text-5xl xs:mb-1 lg:mb-4 lg:mt-[13%] xl:mt-[15%] md:col-span-5">I also enjoy writing...</div>
        <div className="webviewer border-4 border-[#00bfff] rounded-xl xs:h-[70vh] sm:w-[100%] lg:-ml-[15vw] md:mb-16" ref={viewer} ></div>
      </div>
    );
  
}