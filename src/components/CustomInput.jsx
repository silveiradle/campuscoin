import React from 'react';

export default function CustomInput({ className, value, onChange, readOnly, ...props }) {

    return (
        <input
            {...props}
            value={value}
            onChange={onChange}
            className={`w-full border-[1px] border-gray-300 rounded-md px-4 py-2 ${className}`}
            readOnly={readOnly}
        />
    );
};