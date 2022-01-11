

import NavbarProvider from '../components/providers/NavContext'
import '../styles/globals.css'
import {PaymentsProvider} from '../components/providers/PaymentsContext'
import HeroProvider from '../components/providers/HeroContext'


function MyApp({ Component, pageProps }) {
  return (
    <PaymentsProvider>
    <NavbarProvider>
    <HeroProvider>

      <Component {...pageProps} />
    </HeroProvider>
    </NavbarProvider>
    </PaymentsProvider>
 
  )

}

export default MyApp
