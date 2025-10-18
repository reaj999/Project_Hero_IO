import React from 'react';
import logo from '../../assets/logo.png';
import vector from '../../assets/Vector.png';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <li className='m-2'><Link to='/'>Home</Link></li>
    <li className='m-2'><Link to='/apps'>Apps</Link></li>
    <li className='m-2'><Link to='/installation'>Installation</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm pl-2 pr-2">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl flex items-center">
                <img src={logo} alt="Hero logo" className="w-8 h-8" width="32" height="32" />
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">HERO.IO</span>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:mr-4">
            <img src={vector} alt="" />
            <span className='text-white text-l font-semibold'>Contribute</span>
            </a>
        </div>
        </div>
    );
};

export default Navbar;