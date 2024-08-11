import React, { useEffect, useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Heading from '../components/Heading';
import { useLocation, useParams } from 'react-router-dom';
import LoadingPage from './Loading';
import { apiUrl } from '../utils/constants';
import { handleFetch } from '../utils/helpers';

export default function JourneyPage() {
    const [message, setMessage] = useState(null);
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [stageData, setStageData] = useState(null);

    const LoadJourneyStage = async () => {
        try {
            const response = await handleFetch({ endPoint: `journey/stages/${id}`, method: 'GET' });

            if (response.ok) {
                const data = await response.json();

                setStageData(data);
                setLoading(false);
            } else {
                console.log('Erro ao fazer o fetch');
            }
        } catch (err) {
            console.error(`${err}`);
        } 
    };

    useEffect(() => {
        LoadJourneyStage();
    }, []);

    return (
        isLoading ?
            <LoadingPage />
            :
            <AuthLayout title={`Jornada ${stageData.title}`}>

                {message && <Notification notificationData={message} />}

                <div className="col-span-6 p-4 flex flex-col space-y-4">

                    <Heading>Etapa X da jornada Y</Heading>

                    <div>
                        {stageData.content && (
                            <div
                                dangerouslySetInnerHTML={{ __html: stageData.content }}
                            />
                        )}
                    </div>

                </div>
            </AuthLayout>
    );
};