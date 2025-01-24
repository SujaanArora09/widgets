import React from 'react'
import Clock from '@/app/components/Clock'
function ClockWidget() {
    return (
        <div className='flex relative h-40 items-center'>
            <div className='bg-white w-40 h-full  items-center justify-center flex p-3 rounded-2xl'>
                <Clock />
            </div>
            <div className='h-4/5 bg-gray-300 w-[0.6px]'/>
            <div className='bg-white w-80 h-full items-center justify-center flex flex-col p-3 rounded-2xl'>
                <div className='border-b-2 align-center flex flex-col text-center pb-4'>
                    <div className='font-bold text-base'>Thursday</div>
                    <div className='font-extrabold text-4xl'>October 10th</div>
                </div>
                <div className='flex w-full justify-evenly font-semibold pt-2 text-xl'>
                    <div>28°C</div>
                    <div>10/08/2024</div>
                </div>
            </div>

        </div>
    )
}

export default ClockWidget