import { React, Image } from 'react'
import logo from '../assets/logo.png'

import {
    NavLink
} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex w-full items-center justify-between py-4 px-10 bg-orange-200">
                <div className="">
                    <img className='w-[10rem] ' src={logo}  alt="Thakur Industries" />
                </div>
                <ul className='flex gap-10 text-lg'>
                    <li >
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar