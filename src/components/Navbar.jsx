import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Logo from '../assets/Logo.png';

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-white shadow-md flex flex-row justify-between items-center px-4 z-40 relative">

            <div className="flex flex-row items-center justify-between space-x-2">
                <img src={Logo} className='h-16 w-16' />
                <p className="font-Satoshi text-xl font-bold text-blue-900">
                    CampusCoin
                </p>
            </div>

            <ul className="flex flex-row space-x-8 text-[#0D3C66]">
                <li>
                    <Link to={'/home'}>Início</Link>
                </li>
            </ul>

            <ProfileCard />

        </nav>
    );
};