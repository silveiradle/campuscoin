import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import AuthLayout from '../layouts/AuthLayout';
import ValuesCarroussel from '../components/ValuesCarroussel/ValuesCarroussel';

export default function HomePage() {
    const { userData } = useContext(AuthContext);

    return (
        <AuthLayout title={'Olá, Leandro!'}>
            Página inicial
        </AuthLayout>
    );
};