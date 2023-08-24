import React, { useState, useEffect } from 'react';
import { vinyl_1, vinyl_2, vinyl_3, vinyl_4, vinyl_5, vinyl_disk } from '../assets';

const VinylList = () => {

  const vinylArray = [vinyl_1,vinyl_2,vinyl_3,vinyl_4,vinyl_5];
  const [vinyl, setVinyl] = useState(1);

  useEffect(() => {
    const toggle = setTimeout(() => {
      if(vinyl === 4){
        setVinyl(0);
      } else {
        setVinyl(vinyl + 1);
      }
    },3000)
  
    return () => {
      clearInterval(toggle);
    }
  },[vinyl])


  return (
    <div className='md:mt-16 flex items-center pl-16'>
      <div className='w-1/2 md:w-5/12 relative vinyl-position z-20'>
        <img src={vinylArray[vinyl]} alt='vinyl' className='object-cover'/>
      </div>
      <div className='md:w-1/2 w-2/3 md:p-6 relative vinyl-disk-position'>
        <img src={vinyl_disk} alt='vinyl_disk' className='object-cover rounded-full ring-8 ring-black shadow-inner opacity-80'/>
      </div>
      <div className={`w-1/4 relative vinyl-inner-position animate-spin-slow z-10 p-8`}>
        <img src={vinylArray[vinyl]} alt='vinyl_bg' className='object-cover rounded-full ring-2 ring-black shadow-inner'/>
      </div>
    </div>
  )
}

export default VinylList