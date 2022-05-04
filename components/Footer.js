import React from 'react'
import Link from 'next/dist/client/link'
import { Toggle } from './Toggle'
import LayoutContainer from './UI/LayoutContainer'

export const Footer = () => {
    return (
        <footer className="w-full fixed bottom-0 bg-primary text-center lg:text-left">
            <div className="text-textcolor bg-primary text-center p-4">
                <Link className="text-textcolor" href="/">Michele Puricelli</Link>
            </div>
        </footer>
    )
}
