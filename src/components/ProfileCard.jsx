import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function ProfileCard() {
    const { userData } = useContext(AuthContext);

    return (
        <button
            className="border-[1px] border-gray-300 rounded-md px-4 py-2 flex flex-row space-x-2 items-center">

            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>

            <p className="text-[#02213C] text-sm font-bold">
                {userData.name}
            </p>

        </button>
    );
};