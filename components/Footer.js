import React from 'react'
import Link from 'next/dist/client/link'

export const Footer = () => {
    return (
        <footer className="w-auto fixed bottom-0 bg-dark-grey text-center lg:text-left">
            <div className="text-white bg-dark-grey text-center p-4">
                <Link className="text-white" href="/">Michele Puricelli</Link>
            </div>
        </footer>
    )
}
