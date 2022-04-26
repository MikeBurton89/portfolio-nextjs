import React from 'react'
import Project from '../components/Project'
import LayoutContainer from '../components/UI/LayoutContainer'
import { Fade } from 'react-reveal'

const Projects = () => {
    return (
        <>
            <Fade>
                <LayoutContainer >
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </LayoutContainer>
            </Fade>

        </>

    )
}

export default Projects