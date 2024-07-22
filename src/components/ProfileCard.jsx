import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfileCard() {
    const { userData, logout } = useContext(AuthContext);
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
        setTimeout(() => {
            logout();
        }, 500);
    };

    return (
        <div
            onClick={() => setOpen(!isOpen)}
            className="border-[1px] border-blue-100 hover:bg-white duration-300 rounded-md px-4 py-2 relative cursor-pointer">

            {
                userData ?
                    <div className="flex flex-row space-x-2 items-center">
                        <div id="avatar" className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <p className="text-[#02213C] text-sm font-bold">
                            {userData.name}
                        </p>
                    </div>
                    :
                    <p className='text-sm text-gray-400 animate-pulse'>Carregando...</p>
            }

            {isOpen && <ul className="w-full duration-300 bg-blue-50 shadow-md rounded-xl absolute top-14 right-0 z-50">
                <Link className='bg-blue-50 w-full text-start px-4 py-2 flex hover:bg-white duration-200'>
                    Perfil
                </Link>
                <button
                    onClick={() => handleLogout()}
                    className='bg-blue-50 w-full text-start px-4 py-2 hover:bg-red-400 hover:text-white duration-200'>
                    Sair
                </button>
            </ul>}

        </div>
    );
};