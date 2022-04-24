import React from 'react'
import Project from '../components/Project'
import LayoutContainer from '../components/UI/LayoutContainer'
import { Fade } from 'react-reveal'

const Projects = () => {
    return (
        <>
            <LayoutContainer >
                <Fade left><Project /></Fade>
                <Fade right><Project /></Fade>
                <Fade left><Project /></Fade>
                <Fade right><Project /></Fade>
            </LayoutContainer>

        </>

    )
}

export default Projects