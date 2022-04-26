import React from 'react'

const LayoutContainer = (props) => {
    return (
        <div className="flex flex-col container mx-auto items-center h-5/6 align-middle">{props.children}</div>
    )
}

export default LayoutContainer