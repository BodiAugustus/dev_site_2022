

import NavbarProvider from '@components/providers/NavContext'
import '@styles/globals.css'
import {PaymentsProvider} from '@components/providers/PaymentsContext'
import HeroProvider from '@components/providers/HeroContext'
import { Web3Provider } from '@components/providers'



function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
    <PaymentsProvider>
    <NavbarProvider>
    <HeroProvider>
      <Component {...pageProps} />
    </HeroProvider>
    </NavbarProvider>
    </PaymentsProvider>
    </Web3Provider>
 
  )

}

export default MyApp
