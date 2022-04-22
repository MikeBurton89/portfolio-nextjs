import React from "react";
import NavbarLink from "./NavbarLink";

const links = [
    {
        id: 0,
        title: 'Who am I',
    },
    {
        id: 1,
        title: 'Projects',

    },
    {
        id: 2,
        title: 'Contacts',

    }]

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark-grey mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                        >
                            Michele Puricelli
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fa-solid fa-arrow-down-from-dotted-line"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {links.map((link) => <NavbarLink key={link.id} title={link.title} />)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}