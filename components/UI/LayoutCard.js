import React from 'react'

const LayoutCard = (props) => {
    return (
        <div className="flex my-4 flex-col items-center bg-transparent text-white rounded opacity-75 md:max-w-xl md:mx-4">
            {props.children}
        </div>
    )
}

export default LayoutCard