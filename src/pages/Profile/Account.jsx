import React, { useContext, useState } from 'react';
import CustomInput from '../../components/CustomInput';
import { AuthContext } from '../../AuthContext';
import PrimaryButton from '../../components/PrimaryButton';
import Label from '../../components/Label';


export default function AccountPage() {
    const [newPassword, setNewPassword] = useState(null);
    const [confirmNewPassword, setConfirmNewPassword] = useState(null);
    const { userData } = useContext(AuthContext);

    return (
        <div className='flex flex-col space-y-4'>

            <p className='font-semibold text-gray-500'>Dados da conta</p>

            <hr />

            <Label htmlFor="name">Confirme a nova senha</Label>
            <CustomInput id='name' value={userData.name} readOnly={true} />

            <Label htmlFor="email">Confirme a nova senha</Label>
            <CustomInput id='email' type='email' value={userData.email} readOnly={true} />

            <p className='font-semibold text-gray-500'>Troca de senha</p>

            <hr />

            <form className='flex flex-col space-y-4'>

                <Label htmlFor="password">Nova senha</Label>
                <CustomInput
                    id='password'
                    type="password"
                />

                <Label htmlFor="confirm-password">Confirme a nova senha</Label>
                <CustomInput
                    id='confirm-password'
                    type="password"
                />
            </form>

            <PrimaryButton>
                Trocar senha
            </PrimaryButton>


        </div>
    );
};