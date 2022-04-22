import React from 'react'

const NavbarLink = (props) => {
    return (
        <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <span className="ml-2">{props.title}</span>
            </a>
        </li>)


}

export default NavbarLink