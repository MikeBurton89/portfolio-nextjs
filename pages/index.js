import LayoutCard from "../components/UI/LayoutCard"
import LayoutContainer from "../components/UI/LayoutContainer"
import { Fade } from "react-reveal"

export default function Home() {
  return (
    <main>
      <Fade>
        <LayoutContainer>
          <LayoutCard ><h1 className='md:text-8xl text-7xl text-start'>Hi <br />my name is <span className='hover:underline'>Michele</span>, but you can call me Mike.</h1></LayoutCard>
          <LayoutCard className='xs:px-6'>
            <p className='mt-20 text-base text-start px-8'>I'm a web developer.</p>
          </LayoutCard>
        </LayoutContainer>
      </Fade>
    </main >
  )
}
