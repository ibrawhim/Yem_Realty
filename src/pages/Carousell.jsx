import React, { useState } from 'react';
import { carouselList } from './CarouselList';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (index, slides) => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (index, slides) => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 mx-5'>
        {carouselList.map((item, index) => (
          <div key={index} className='md:hover:shadow shadow rounded relative h-[300px]'>
            <img src={item.images[currentIndex]} className='w-full h-2/3' alt='' />
            <div className='bg-red-500 w-1/2 md:w-2/3 my-2 rounded px-2 text-white font-bold'>
              {item.type}
            </div>
            <div className='text-xl font-bold my-2'> ₦{item.price}</div>
            <div className='flex my-2'>
              <span className='mt-1'>
                <IoLocationOutline />
              </span>
              {item.area}
            </div>
            <button
              onClick={() => prevSlide(index, item.images)}
              className='absolute top-[35%] bg-white rounded-full text-black p-1 -translate-x-0 left-2 translate-y-[-50%]'>
              <MdOutlineChevronLeft />
            </button>
            <button
              onClick={() => nextSlide(index, item.images)}
              className='absolute top-[35%] bg-white rounded-full text-black p-1 -translate-x-0 right-2 translate-y-[-50%]'>
              <MdChevronRight />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousell;
