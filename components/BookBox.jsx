import {useEffect, useRef} from 'react';

export default function BookBox() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            initialDoc: 'https://res.cloudinary.com/bodi-web3/image/upload/v1642094401/Teaser_iszgk1.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent  px-5">
        <div className="header text-center text-white text-3xl mt-10 mb-2">I also enjoy writing...</div>
        <div className="webviewer border-4 border-[#00bfff] rounded-xl" ref={viewer} style={{height: "70vh"}}></div>
      </div>
    );
  
}