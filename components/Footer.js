import React from 'react'
import Link from 'next/dist/client/link'

export const Footer = () => {
    return (
        <footer className="w-full fixed bottom-0 bg-primary text-center lg:text-left">
            <div className="text-textcolor bg-primary text-center p-4">
                <Link className="text-white" href="/">Michele Puricelli</Link>
            </div>
        </footer>
    )
}
