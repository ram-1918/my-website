import { faArrowAltCircleLeft, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='group/image relative flex flex-col justify-center items-center'>
      {slides.map((slide, index) => {
        return (
          <div
            className={`${index === current ? 'opacity-1' : 'opacity-0'} transition duration-700 ease-in-out w-full h-full`}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel' className='w-[100%] h-[100%]' ></img>
            )}
          </div>
        );
      })}
        <button className='invisible group-hover/image:visible absolute top-[50%] left-[1%] text-lg font-bold bg-opacity-80 bg-gray-300 p-[5px]' onClick={prevSlide}><FontAwesomeIcon icon={faCaretLeft} /></button>
        <button className='invisible group-hover/image:visible absolute top-[50%] right-[1%] text-lg font-bold bg-opacity-80 bg-gray-300 p-[5px]' onClick={nextSlide}><FontAwesomeIcon icon={faCaretRight} /></button>
    </section>
  );
};

export default ImageSlider;