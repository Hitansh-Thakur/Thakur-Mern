import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='w-1/5 h-3/4 bg-slate-900 text-lg text-slate-200 rounded-md p-5 fixed '>
            <ul className='flex flex-col gap-2'>
                <li><Link to='#p1'>product 1</Link></li>
                <li><Link to='#p2'>product 1</Link></li>
            </ul>
        </div>
    )
}

export default SideBar