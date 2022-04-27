import React from 'react'
import LayoutCard from '../../components/UI/LayoutCard'
import LayoutContainer from '../../components/UI/LayoutContainer'
import { projectsData } from '../../public/projectsData'

const Text = () => {
    return (
        <LayoutContainer>
            <LayoutCard>
                <div>
                    <h1>{projectsData.title}</h1>
                    <p>{projectsData.text}</p>
                </div>
            </LayoutCard>
        </LayoutContainer>
    )
}

export default Text