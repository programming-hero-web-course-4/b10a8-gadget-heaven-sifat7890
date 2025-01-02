import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";


const Navbar = () => {
    const location = useLocation()
    const getNavbarStyle = (path) => {
        return path == "/" || path.startsWith('/category') ? 'bg-[#9538E2] text-white' : 'bg-white text-black'
    };

    const navbarStyle = getNavbarStyle(location.pathname);
    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="AboutUs">AboutUs</NavLink></li>
    </>

    return (
        <div className={` ${navbarStyle}  mt-5 pt-4 rounded-t-xl pb-3`}>
            <div className='navbar w-10/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-black gap-2">
                    <span className='bg-white rounded-full p-2'><FiShoppingCart /></span>
                    <span className='bg-white rounded-full p-2'><MdFavoriteBorder /></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;