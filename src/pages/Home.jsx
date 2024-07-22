import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthContext';
import Banner from '../components/Banner';

export default function HomePage() {
    const { userData } = useContext(AuthContext);

    return (
        <div className="w-full min-h-screen bg-blue-50">

            <Navbar />

            <div className="grid grid-cols-12">

                <div className="xl:col-span-2"></div>

                <div className="col-span-12 lg:col-span-10 xl:col-span-8 bg-white min-h-screen">

                    <Banner userData={userData} />

                    <div className="h-full w-full p-4 space-y-2">

                        <p className="text-lg text-gray-400">Minhas conquistas</p>

                        <div
                            className="flex flex-row items-center justify-center gap-4 bg-gray-200 p-4 flex-wrap rounded-sm">

                            <div
                                className="h-32 w-32 bg-gray-400 rounded-md flex items-center justify-center text-white">
                                <i className="fa-solid fa-user text-7xl"></i>
                            </div>
                        </div>

                        <hr />

                        <p className="text-lg text-gray-400">Minhas jornadas</p>

                        <div
                            className="flex flex-row lg:overflow-x-scroll bg-gray-200 p-4 gap-4 justify-start flex-wrap lg:flex-nowrap">
                        </div>

                        <p className="text-lg text-gray-400">Todas jornadas</p>

                        <div className="flex flex-row lg:overflow-x-scroll bg-gray-200 p-4 gap-4 justify-start flex-wrap lg:flex-nowrap">

                        </div>

                    </div>

                </div>

                <div className="xl:col-span-2"></div>

            </div>

        </div>
    );
};