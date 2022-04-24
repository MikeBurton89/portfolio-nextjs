import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import background from '../public/assets/background.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
