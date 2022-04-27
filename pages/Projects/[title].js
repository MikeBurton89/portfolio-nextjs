import React from 'react'
import LayoutCard from '../../components/UI/LayoutCard'
import LayoutContainer from '../../components/UI/LayoutContainer'
import { projectsData } from '../../public/projectsData'


// export function getStaticPaths() {
//     const projects = projectsData
//     return {
//         paths: projects.map(project => {
//             const title = project.title.toLowerCase().replace(/ /g, '-');
//             return {
//                 params: {
//                     title
//                 }
//             }
//         }),
//         fallback: false
//     }
// }

// export function getStaticProps({ params }) {
//     const title = params.title.replace(/\-/g, '+')
//     const projects = 
//     return {
//         props: {
//             title: projects[0]
//         }

//     }

// }

const Text = () => {
    return (
        <LayoutContainer>
            <LayoutCard>
                <div>
                    <h1></h1>
                    <p></p>
                </div>
            </LayoutCard>
        </LayoutContainer>
    )
}





export default Text