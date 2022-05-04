import React from "react";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { Toggle } from "./Toggle";

const links = [
    {
        id: 0,
        title: 'Who am I',
        href: '/WhoAmI'
    },
    {
        id: 1,
        title: 'Projects',
        href: '/IndexProjects'

    },
    {
        id: 2,
        title: 'Contacts',
        href: '/Contacts'

    }]

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="z-50 sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-primary mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavbarLink className="nav-item text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-colortext" href='/' title='Michele Puricelli' />
                        <button
                            className="text-textcolor cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow " +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {links.map((link) => <NavbarLink href={link.href} key={link.id} title={link.title} />)}
                            <Toggle className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textcolor hover:opacity-75'></Toggle>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
