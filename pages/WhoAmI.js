import React from 'react'
import LayoutCard from '../components/UI/LayoutCard'
import LayoutContainer from '../components/UI/LayoutContainer'

const WhoAmI = () => {

    let currentYear = new Date().getFullYear()

    return (
        <LayoutContainer>
            <LayoutCard>
                <h1 className='md:text-8xl text-7xl mb-2'>Who am I?</h1>
            </LayoutCard>
            <LayoutCard>
                <p className='px-6'>
                    {'This is a fine question indeed.
                    Let's just ignore the philosophy of the question and try to answer at least with basic info.
                    I'm italian, I'm {currentYear - 1989} years old
                    I am a web developer, I use computer to do things that you can click or touch on the internet.
                    For example my age above will always be up to date thanks to something called Javascript.'}
                </p>
            </LayoutCard>
        </LayoutContainer>
    )
}

export default WhoAmI
