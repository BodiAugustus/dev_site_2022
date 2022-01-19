
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import NavbarProvider from '@components/providers/NavContext'
import '@styles/globals.css'

import HeroProvider from '@components/providers/HeroContext'
import  {Web3Provider}  from '@components/providers'




function MyApp({ Component, pageProps }) {

  return (
    <Web3Provider>
    <NavbarProvider>
    <HeroProvider>
      <ToastContainer/>
      <Component {...pageProps} />
    </HeroProvider>
    </NavbarProvider>
    </Web3Provider>
 
  )

}

export default MyApp


//
//
// NEXT_PUBLIC_TARGET_CHAIN_ID=1337
// NEXT_PUBLIC_NETWORK_ID=5777