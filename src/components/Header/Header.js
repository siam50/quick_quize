import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-teal-600 text-white">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Quick Quiz</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;