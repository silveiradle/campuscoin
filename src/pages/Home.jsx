import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthContext';
import Banner from '../components/Banner';
import AuthLayout from '../layouts/AuthLayout';
import ValuesCarroussel from '../components/ValuesCarroussel/ValuesCarroussel';

export default function HomePage() {
    const { userData } = useContext(AuthContext);

    return (
        <AuthLayout>
            <ValuesCarroussel />
            <span className="text-xl text-gray-500">
                Olá, <p className='font-semibold'>{userData.name}!</p>
            </span>
            <hr />
        </AuthLayout>
    );
};