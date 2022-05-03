import React from 'react'
import Link from 'next/link'

const NavbarLink = (props) => {
    return (
        <Link className='nav-item' passHref={true} href={props.href}>
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textcolor hover:opacity-75" >
                <span className="ml-2">{props.title}</span>
            </a>
        </Link>)


}

export default NavbarLink