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
    <div>
      <img src={vinylArray[vinyl]} alt='vinyl' className='object-cover relative right-[150px] z-10'/>
      <img src={vinyl_disk} alt='vinyl_disk' className='object-cover rounded-full relative bottom-[400px] left-[150px] ring-8 ring-white shadow-inner opacity-80'/>
      <div className='w-1/2 h-1/2 relative z-20 left-[250px] bottom-[700px] p-8'>
        <img src={vinylArray[vinyl]} alt='vinyl_bg' className='object-cover rounded-full ring-2 ring-white shadow-inner'/>
      </div>
    </div>
  )
}

export default VinylList