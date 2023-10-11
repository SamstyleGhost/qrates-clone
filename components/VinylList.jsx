import React, { useState, useEffect } from 'react';
import { vinyl_1, vinyl_2, vinyl_3, vinyl_4, vinyl_5 } from '../assets';
import Vinyl from './Vinyl';

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
    <div className='md:mt-16 flex justify-center'>
      <Vinyl 
        vinyl_img={vinylArray[vinyl]}
      />
    </div>
  )
}

export default VinylList