import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ValuesCarroussel() {
  const [isLoading, setLoading] = useState(true);
  const [actionsList, addActionToList] = useState([]);
  const actionTickers = ["PETR4", "ITUB4", "VALE3", "WEGE3", "ABEV3", "BBAS3", "BPAC11", "BBDC3", "ITSA4", "SANB11", "ELET3", "VIVT3", "JBSS3", "SUZB3", "BBSE3", "RDOR3", "B3SA3", "SBSP3", "RENT3", "RADL3"];

  const fetchTicker = async (ticker) => {
    const apiToken = "gUbYCm9ZQFhVciwi3NVXdc";

    try {
      const response = await fetch(`https://brapi.dev/api/quote/${ticker}?token=${apiToken}`);
      if (response.ok) {
        const data = await response.json();
        const dados = {
          abbreviation: data['results'][0]['symbol'],
          value: data['results'][0]['regularMarketPrice'],
          percentage: data['results'][0]['regularMarketChangePercent']
        };
        addActionToList((prevList) => [...prevList, dados]);
      } else {
        console.log('Erro no response.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllData = async () => {
    await Promise.all(actionTickers.map(ticker => fetchTicker(ticker)));
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className='w-full h-16 flex items-center relative overflow-hidden bg-gray-50 cursor-default rounded-md'>
      {isLoading ? <p className='text-gray-400 animate-pulse'>Carregando...</p> : (
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 200, ease: 'linear' }}
          className='flex space-x-4 bsolute'
        >
          {
            actionsList.map((action, index) => {
              const isPositive = String(action.percentage).includes('-');

              return <div key={index} className={`p-4 ${isPositive ? 'bg-green-50' : 'bg-red-50'} flex flex-row items-center justify-center space-x-2`}>
                <p className='font-bold text-gray-700'>
                  {action.abbreviation}
                </p>
                <p>
                  R${action.value.toFixed(2).replace(".", ",")}
                </p>
                <p className={isPositive ? 'text-green-700' : 'text-red-700'}>
                  ({action.percentage.toFixed(2)}%)
                </p>
              </div>
            }
            )
          }
        </motion.div>
      )}
    </div>
  );
};