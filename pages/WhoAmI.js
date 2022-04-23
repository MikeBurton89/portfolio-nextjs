import React from 'react'
import LayoutCard from '../components/UI/LayoutCard'
import LayoutContainer from '../components/UI/LayoutContainer'

const WhoAmI = () => {
    return (
        <LayoutContainer>
            <LayoutCard>
                <main>
                    <h1>Hi, my name is Michele but you can call me Mike.</h1>
                    <p>I am a web developer</p>
                </main>
            </LayoutCard>
        </LayoutContainer>
    )
}

export default WhoAmI