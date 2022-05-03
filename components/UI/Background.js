import React from 'react'


const Background = (props) => {
    return (
        <>
            <div className='w-full
            bg-gradient-to-r
from-accent
via-primary
to-secondary
    h-screen
    background-animate 
    '>{props.children}
            </div >
        </>

    )
}

export default Background