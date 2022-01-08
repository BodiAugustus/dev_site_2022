

import NavbarProvider from '../components/providers/NavContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
 
  )

}

export default MyApp
