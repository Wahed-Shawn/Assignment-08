import { FaGithub } from "react-icons/fa";
import logoImg from '../assets/logo.png'
import { NavLink } from "react-router";

const NavBar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/apps'>Apps</NavLink></li>
        <li><NavLink to='/installedApps'>Installation</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm fixed max-w-400 z-10 left-1/2 -translate-x-1/2 top-0">
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
                <div className="flex items-center gap-1">
                    <img src={logoImg} className="h-12" />
                    <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-xl">HERO.IO</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-gray-700">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"><FaGithub size={20} /> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;