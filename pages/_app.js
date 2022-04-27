import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import background from '../public/assets/background.png'
import { Fade } from 'react-reveal'
import Background from '../components/UI/Background'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background>
        <Navbar></Navbar>

        <Component {...pageProps} />

        <Footer></Footer>
      </Background>
    </>
  )
}

export default MyApp
