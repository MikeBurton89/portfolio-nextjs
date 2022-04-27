import { getClientBuildManifest } from 'next/dist/client/route-loader'
import React from 'react'
import LayoutCard from '../components/UI/LayoutCard'
import LayoutContainer from '../components/UI/LayoutContainer'

const WhoAmI = () => {
    const birthDate = new Date('06/28/1989')
    let month_diff = Date.now() - birthDate.getTime()
    let age_dt = new Date(month_diff)
    let year = age_dt.getUTCFullYear()
    let age = Math.abs(year - 1970)

    return (
        <LayoutContainer>
            <LayoutCard>
                <h1 className='md:text-8xl text-7xl mb-2'>Who am I?</h1>
            </LayoutCard>
            <LayoutCard>
                <p className='px-6'>
                    {`This is a fine question indeed.
                    Let's just ignore the philosophy of the question and try to answer at least with basic info.
                    I'm italian, I'm ${age} years old.
                    I am a web developer to summarize my job: 
                    I use computer to do things that you can click or touch on the internet.  
                    For example my age above will always be up to date thanks to something called Javascript.
                    Was it fundamental to code an age calculator? No, but I'm a developer, I will spend hours
                    automating a 10 second task.`}

                </p>
            </LayoutCard>
        </LayoutContainer>
    )
}

export default WhoAmI
