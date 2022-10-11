import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-teal-600 text-white lg:px-12  mb-10 grid md:grid-cols-2 justify-items-center md:flex md:justify-between">
            <div className=" flex-1">
                <a className="btn btn-ghost normal-case text-xl">Quick Quiz</a>
            </div>
            <div className=" flex-none">
                <ul className="menu md:menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/quizes'>Quizes</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;