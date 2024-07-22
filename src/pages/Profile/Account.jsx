import React, { useContext } from 'react';
import CustomInput from '../../components/CustomInput';
import { AuthContext } from '../../AuthContext';
import PrimaryButton from '../../components/PrimaryButton';


export default function AccountPage() {
    const { userData } = useContext(AuthContext);

    return (
        <div className='flex flex-col space-y-4'>

            <p className='font-semibold text-gray-500'>Dados da conta</p>

            <hr />

            <label htmlFor="name">Nome</label>
            <CustomInput id='name' value={userData.name} readOnly={true} />

            <label htmlFor="email">Level</label>
            <CustomInput id='email' value={userData.email} readOnly={true} />

            <p className='font-semibold text-gray-500'>Senha</p>

            <hr />

            <label htmlFor="password">Level</label>
            <CustomInput id='password' type="password" value={userData.password} readOnly={true} />

            <PrimaryButton>
                Trocar senha
            </PrimaryButton>


        </div>
    );
};