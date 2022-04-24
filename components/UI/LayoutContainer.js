import React from 'react'

const LayoutContainer = (props) => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto items-center ">{props.children}</div>
    )
}

export default LayoutContainer