import Image from 'next/image'
import React from 'react'
import computer from '../public/assets/computer.png'

const Card = () => {
    return (
        <div>
            <a href="#" className="flex mb-8 flex-col items-center bg-white opacity-75 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image objectFit="contain" className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={computer} alt="" />
                <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
        </div>
    )
}

export default Card