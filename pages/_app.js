

import NavbarProvider from '../components/providers/NavContext'
import '../styles/globals.css'
import {PaymentsProvider} from '../components/providers/PaymentsContext'


function MyApp({ Component, pageProps }) {
  return (
    <PaymentsProvider>
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
    </PaymentsProvider>
 
  )

}

export default MyApp
