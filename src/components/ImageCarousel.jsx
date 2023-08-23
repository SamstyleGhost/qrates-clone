import React, { useState } from 'react';
import { artist_1 } from '../assets';

const ImageCarousel = ({ images }) => {

  const [picture, setPicture] = useState(0);


  return (
    <div className='md:h-[800px] h-[1100px] bg-[#dcdcd4] flex flex-col md:flex-row'>
      <div className='w-full md:w-5/6 overflow-hidden mx-auto'>
        <img src={images[picture].img} alt='side_pic' className='w-full h-full md:border border-black object-cover'/>
      </div>
      <div className='flex flex-col md:justify-between md:max-w-1/2 md:border border-black'>
        <div>
          <div className='border-2 border-black text-center w-[140px] font-semibold mx-8 my-10 p-1'>
            SCENE CHECK
          </div>
          <div className='mx-8 flex flex-col gap-2'>
            <div className='font-bold text-4xl w-1/2'>
              <span>{images[picture].title}</span>
            </div>
            <div className='font-[600] text-xl w-3/4'>
            <span>{images[picture].content}</span>
            </div>
          </div>
        </div>
        <div className='m-8 flex flex-row justify-center md:flex-start gap-2 md:self-start'>
          {images.map((pic, index) => (
            <div 
              key={index}
              onClick={() => setPicture(index)}
              className={`w-[50px] h-[50px] border-2 border-black rounded-full align-middle text-center cursor-pointer ${index === picture ? 'bg-black text-white' : 'bg-transparent'}`}
            >
              <div className='mx-auto my-[12px]'>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel