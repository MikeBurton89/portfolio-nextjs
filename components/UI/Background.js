import React from 'react'


const Background = (props) => {
    return (
        <>
            <div className='w-full
            bg-gradient-to-r
from-green
via-dark-grey
to-grey
    h-screen
    background-animate
    '>{props.children}
            </div >
        </>

    )
}

export default Background