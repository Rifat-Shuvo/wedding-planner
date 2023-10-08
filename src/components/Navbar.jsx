import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // const{user} = UseAuth(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li className='mr-3
        '>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>Home</NavLink>
        </li>
        <li className='mr-3'><NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>About</NavLink></li>
        <li className='mr-3'><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>Contact</NavLink></li>

        <li className='mr-3'><NavLink to='/gallery' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>Gallery</NavLink></li>
        <li className='mr-3'><NavLink to='/blog' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-white text-lg font-semibold rounded"}>Blogs</NavLink></li>

    </>

    return (
        <div className="navbar bg-rose-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52 text-white">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <h3 className='text-2xl font-bold text-rose-600'>RS EVENT PLANNER</h3>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu-horizontal px-5">
                    {links}
                </ul>
            </div>

            <div className='navbar-end'>
               
                {
                    user ?
                        <div className='flex'>
                            <p className='mr-1 text-xs'>User : {user.email}</p>
                            <button onClick={handleSignOut} className='btn btn-error text-white'>sign Out</button>
                        </div>
                        :
                        <Link to="/login"><button className='btn btn-error text-white'>Log in / sign up </button></Link>
                }


            </div>

        </div>
    );
};

export default Navbar;