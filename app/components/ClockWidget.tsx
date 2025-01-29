"use client"
import React, { useState, useEffect } from 'react';
import Clock from '@/app/components/Clock';

function ClockWidget() {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the temperature data for Bengaluru
  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = 'YOUR_API_KEY'; 
      const city = 'Bengaluru';
      const unit = 'metric'; 

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
        const data = await response.json();
        if (response.ok) {
          setTemperature(data.main.temp);
          setLoading(false);
        } else {
          setError('28');
          setLoading(false);
        }
      } catch (err) {
        setError('28');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className='flex relative h-40 items-center'>
      <div className='bg-white w-40 h-full items-center justify-center flex p-3 rounded-2xl'>
        <Clock />
      </div>
      <div className='h-4/5 bg-gray-300 w-[0.6px]' />
      <div className='bg-white w-80 h-full items-center justify-center flex flex-col p-3 rounded-2xl'>
        <div className='border-b-2 align-center flex flex-col text-center pb-4 w-64'>
          <div className=' text-base mb-2'>Thursday</div>
          <div className='font-black text-[30px] tracking-wide'>October 10th</div>
        </div>
        <div className='flex w-full justify-between px-6 font-semibold pt-3 text-xl'>
          <div>
            {loading ? (
              'Loading...'
            ) : error ? (
              <span className='text-gray-800'>{error} °C</span>
            ) : (
              `${temperature}°C`
            )}
          </div>
          <div>Bengaluru</div>
        </div>
      </div>
    </div>
  );
}

export default ClockWidget;
