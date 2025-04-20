import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-200 shadow-md'>
            <div className="w-10/12 mx-auto navbar rounded p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/bookLists'>Book Lists</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold">Book <span className='text-red-800'>Vibe</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-indigo-800 border border-indigo-800 font-semibold ' : ''} to='/bookLists'>Book Lists</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;