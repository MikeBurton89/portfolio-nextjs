import React from 'react'

const LayoutContainer = (props) => {
    return (
        <div className="flex flex-col container mx-auto items-center align-middle">{props.children}</div>
    )
}

export default LayoutContainer