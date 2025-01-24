'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/components/Carousel';
import { useState } from 'react';
import StatusButton from './AddToCartButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const IMAGES = [
  '/productImages/image1.png',
  '/productImages/image2.png',
  '/productImages/image3.png',
  '/productImages/image4.png',
  '/productImages/image5.png',
];

export function CarouselCustomIndicator() {
  const [index, setIndex] = useState(0);

  return (
    <div className='relative w-full max-w-xs bg-white rounded-2xl'>
      <div className='relative'>
      {index < IMAGES.length - 1 && (
          <FaChevronRight
            onClick={() => setIndex(index + 1)}
            className='bg-white absolute z-10 top-1/2 -translate-y-1/2 right-5 rounded-full p-2 w-7 h-7 cursor-pointer'
          />
        )}
      {index > 0 && (
          <FaChevronLeft
            onClick={() => setIndex(index - 1)}
            className='bg-white absolute z-10 top-1/2 -translate-y-1/2 left-5 rounded-full p-2 w-7 h-7 cursor-pointer'
          />
        )}
        <Carousel index={index} onIndexChange={setIndex}>
          <CarouselContent className='relative cursor-default'>
            {IMAGES.map((image, idx) => (
              <CarouselItem key={idx} className='p-4'>
                <div
                  className='flex aspect-square items-center justify-center bg-cover bg-center rounded-xl'
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className='flex w-full justify-center space-x-3 px-4'>
  {IMAGES.map((image, idx) => (
    <button
      key={idx}
      type='button'
      aria-label={`Go to slide ${idx + 1}`}
      onClick={() => setIndex(idx)}
      className={`h-12 w-12 ${index === idx ? 'border-2 border-[#2E5079] rounded-xl ' : ''}`}
    >
      <div
        className='h-full w-full bg-cover bg-center rounded-lg'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </button>
  ))}
</div>
      <div className='p-4'>
        <div className='flex tracking-wide'>
          <h1 className='font-bold'>
            Cusbitus -<span className='font-bold text-[#2E5079]'>&nbsp;5822P</span>
          </h1>
        </div>
        <p className='text-sm text-black/60 tracking-wide py-2'>
          Self-winding Grand date in a double aperature. Day by hand. Moon phases
        </p>
        <div className='flex justify-between pt-3'>
          <h1 className='font-bold tracking-wide pt-2'>$2,300</h1>
        <StatusButton/>
        </div>
        
      </div>
    </div>
  );
}
