import React from 'react'

const LayoutCard = (props) => {
    return (
        <div className="flex my-4 flex-col items-center bg-white rounded opacity-75 md:flex-row md:max-w-xl lg:mx-4">
            {props.children}
        </div>
    )
}

export default LayoutCard