import React, { useState } from 'react';

export default function JourneyCard({ journeyData }) {
    const [journeyStatus] = useState(null);

    // Level < Necessário = Indisponível
    // Level >= Necessário && Não iniciada = Disponível
    // Level >= Necessário && Iniciada = Ativa
    // 

    function getJourneyStatus() {
        if (journeyData.status === 0) {
            heading = '';
            button = '';
            active = false;
        } else if (journeyData.status === 'Disponível') {

        } else if (journeyData.status === '') {

        } else if (journeyData.status === '') {

        } else if (journeyData.status === '') {

        } else if (journeyData.status === '') {

        }else{

        }
    }

    return (
        <div class="flex flex-col w-80 h-96 bg-white rounded-lg shadow-sm hover:scale-105 duration-300">
            <div class="w-full py-4 ${headingBG} text-center rounded-t-lg">
                <p>1 - ID</p>
            </div>
            <div class="flex flex-1 flex-col space-y-4 items-center p-4">
                <div class="flex flex-1 flex-col items-center justify-center space-y-4">
                    <i class="fa-solid fa-user text-7xl text-gray-500"></i>
                    <p class="text-xl font-semibold text-gray-600">Teste</p>
                </div>
                <button class="w-full py-4 ${button} rounded-lg">
                    Botão
                </button>
            </div>
        </div>

    );
};

/*

if (journey.id === uJourney.journey_id && uJourney.actual_stage === uJourney.stages) {
                                title = `Concluída`;
                                headingBG = 'bg-green-700 text-white';
                                button = 'bg-green-200 text-green-700';
                                buttonLabel = 'Visualizar';

                            } else if (journey.id === uJourney.id && !uJourney.completed) {
                                title = `Ativa`;
                                headingBG = 'bg-blue-400 text-white';
                                button = 'border-[1px] border-blue-400 text-blue-400';
                                buttonLabel = 'Visualizar';

                            } else if (journey.level <= user.level) {
                                title = 'Disponível';
                                headingBG = 'bg-blue-700 text-white';
                                button = 'bg-blue-500 text-white';
                                buttonLabel = 'Começar';

                            } else {
                                title = 'Inisponível';
                                headingBG = 'bg-gray-300 text-gray-600';
                                button = 'bg-gray-300 text-gray-600';
                                buttonLabel = 'Indisponível';
                            }

*/