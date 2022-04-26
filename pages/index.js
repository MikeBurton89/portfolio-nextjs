import LayoutCard from "../components/UI/LayoutCard"
import LayoutContainer from "../components/UI/LayoutContainer"
import { Fade } from "react-reveal"

export default function Home() {
  return (
    <main>
      <Fade>
        <LayoutContainer>
          <LayoutCard ><h1 className='md:text-8xl text-7xl text-start'>Hi <br />my name is <span className='hover:uppercase hover:underline'>Michele</span>, but you can call me Mike.</h1></LayoutCard>
          <LayoutCard>
            <p className='mt-20 text-base text-start'>I develop websites for a living. From wireframe to finished products, from your idea to a website.</p>
          </LayoutCard>
        </LayoutContainer>
      </Fade>
    </main >
  )
}
