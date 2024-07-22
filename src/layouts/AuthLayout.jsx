import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AuthLayout({ children }) {
    return (
        <div className="w-full min-h-screen bg-blue-50">

            <Navbar />

            <div className="grid grid-cols-12">

                <div className="xl:col-span-2"></div>

                <div className="col-span-12 lg:col-span-10 xl:col-span-8 bg-white min-h-screen p-4 flex flex-col space-y-4">
                    {children}
                </div>

                <div className="xl:col-span-2"></div>

            </div>

            <Footer>

            </Footer>

        </div>
    );
};