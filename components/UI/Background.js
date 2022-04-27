import React from 'react'


const Background = (props) => {
    return (
        <>
            <div className='w-full
            bg-gradient-to-r
from-green
via-grey
to-dark-grey
    h-screen
    background-animate
    '>{props.children}
            </div >
        </>

    )
}

export default Background