import React from 'react';

export default function PrimaryButton({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={` bg-blue-500 hover:bg-blue-400 active:bg-blue-600 duration-200 text-white p-2 rounded-md ${className}`}
        >
            {children}
        </button>
    );
};