import Image from 'next/image'
import React from 'react'
import computer from '../public/assets/computer.png'
import LayoutCard from './UI/LayoutCard'
import Link from 'next/link'

const Project = (props) => {
    return (
        <Link key={props.id} passHref={true} href={`/Projects/${props.title}`}>
            <a>
                <LayoutCard>
                    {/* <Image objectFit="contain" className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={computer} alt="" /> */}
                    <div className="flex flex-col p-4 ">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.text}</p>
                    </div>
                </LayoutCard>
            </a>
        </Link>
    )
}

export default Project