import React from 'react';
import logo from '../../assets/logo.png';
import vector from '../../assets/Vector.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const activeLinkClass = "relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]";
    const inactiveLinkClass = "font-bold relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:transition-all after:duration-300 hover:after:w-full";

    const links = (
        <>
            <li className='m-2'>
                <NavLink to='/' className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
                    Home
                </NavLink>
            </li>
            <li className='m-2'>
                <NavLink to='/apps' className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
                    Apps
                </NavLink>
            </li>
            <li className='m-2'>
                <NavLink to='/installation' className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
                    Installation
                </NavLink>
            </li>
        </>
    );
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
            <a
                href="https://github.com/reaj999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:mr-4"
            >
                <img src={vector} alt="Contribute icon" />
                <span className='text-white text-l font-semibold'>Contribute</span>
            </a>
        </div>
        </div>
    );
};

export default Navbar;