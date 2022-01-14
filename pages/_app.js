

import NavbarProvider from '@components/providers/NavContext'
import '@styles/globals.css'

import HeroProvider from '@components/providers/HeroContext'
import { Web3Provider } from '@components/providers'



function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
    <NavbarProvider>
    <HeroProvider>
      <Component {...pageProps} />
    </HeroProvider>
    </NavbarProvider>
    </Web3Provider>
 
  )

}

export default MyApp
