import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingPage from './pages/Loading';

const PrivateRoute = () => {
    const [isAuthenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuthenticated(false);
            return;
        }

        const verifyToken = async () => {
            try {
                // Trocar de localhost para IP Publico
                const response = await fetch('http://localhost:3000/api/auth/verify-token', {
                    headers: {
                        'x-access-token': token,
                    },
                });

                if (response.ok) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
            }
        };

        verifyToken();
    }, []);

    if (isAuthenticated === null) {
        return <LoadingPage />
    }

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;