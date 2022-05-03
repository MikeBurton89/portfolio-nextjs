import React from 'react'
import { Fade } from 'react-reveal'
import LayoutCard from '../components/UI/LayoutCard'
import LayoutContainer from '../components/UI/LayoutContainer'

const skills = ["The Holy Trinity: HTML, CSS and Javascript;",
    "Bootstrap;",
    "Tailwind;",
    "ReactJS;",
    "NextJS (this portfolio website was made using Next);",
    "NodeJS;",
    "Databases: MySQL and MongoDB",
    "Visual Studio Code;",
    "GitHub",
    "Canva for wireframe design."
]

const birthDate = new Date('06/28/1989')
let month_diff = Date.now() - birthDate.getTime()
let age_dt = new Date(month_diff)
let year = age_dt.getUTCFullYear()
let age = Math.abs(year - 1970)


const presentationText = [
    `This is a fine question indeed.
                    Let's just ignore the philosophy of the question and try to answer at least with basic info.
                    I'm italian, I'm ${age} years old.
                    I am a web developer.`,
    `To summarize my job: 
                    I use computer to make things that you can click or touch on the internet.  
                    For example: my age above will always be up to date thanks to something called Javascript.
                    Was it fundamental to code an age calculator? No, but I'm a developer, I will spend hours
                    automating a 10 second task.`,
    `Here's a list of the technologies and tools I use daily:`]





const WhoAmI = () => {




    return (
        <Fade>
            <LayoutContainer>
                <LayoutCard>
                    <h1 className='md:text-8xl text-7xl mb-2'>Who am I?</h1>
                </LayoutCard>
                <LayoutCard>
                    <p className='px-6'>
                        {presentationText[0]}<br />{presentationText[1]}
                    </p>
                    <p className='py-8 px-8 text-2xl'>{presentationText[2]}</p>
                    <ul className='flex flex-col justify-start list-disc'>
                        {skills.map((skill) => <li key={skills.indexOf(skill)}>{skill}</li>)}
                    </ul>

                </LayoutCard>
            </LayoutContainer>
        </Fade>
    )
}

export default WhoAmI
