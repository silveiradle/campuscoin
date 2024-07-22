import React from 'react';

export default function PrimaryButton({ children, className, disabled = false, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`${disabled ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white'} duration-200 p-2 rounded-md ${className}`}
        >
            {children}
        </button>
    );
};