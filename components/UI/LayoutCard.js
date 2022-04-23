import React from 'react'

const LayoutCard = (props) => {
    return (
        <div className="flex mb-8 flex-col items-center bg-white opacity-75 md:flex-row md:max-w-xl hover:bg-gray-100">
            {props.children}
        </div>
    )
}

export default LayoutCard