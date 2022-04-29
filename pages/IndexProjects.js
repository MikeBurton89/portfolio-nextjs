import React from 'react'
import Project from '../components/Project'
import LayoutContainer from '../components/UI/LayoutContainer'
import { Fade } from 'react-reveal'
import { projectsData } from '../public/projectsData'

const IndexProjects = () => {
    return (
        <>
            <Fade>
                <LayoutContainer className='flex-wrap'>
                    {projectsData.map((project) => <Project href={project.title} key={project.id} title={project.title} text={project.text} />)}
                </LayoutContainer>
            </Fade>

        </>

    )
}

export default IndexProjects