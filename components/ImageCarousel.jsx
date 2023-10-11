import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {

  const [picture, setPicture] = useState(0);

  return (
    <div className='md:h-screen bg-white flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img src={images[picture].img} alt='side_pic' className='w-full h-full md:border border-black object-cover'/>
      </div>
      <div className='flex flex-col md:justify-between md:w-1/2 md:border border-black'>
        <div>
          <div className='border-2 border-black text-center w-[140px] font-semibold mx-8 my-10 p-1'>
            SCENE CHECK
          </div>
          <div className='mx-8 flex flex-col gap-2'>
            <div>
              <span className='font-bold text-xl italic'>Check out the photos on <span className='text-2xl underline'><a href='https://www.pexels.com/' target='_blank' rel='noreferrer'>Pexels</a></span></span>
            </div>
            <div className='font-bold text-4xl md:w-1/2'>
              <span>Photo by <span className='underline'><a href={`${images[picture].url}`} target='_blank' rel='noreferrer'>{images[picture].title}</a></span></span>
            </div>
            <div className='font-[600] text-xl mt-4 md:w-3/4'>
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