import React, { useState, useEffect } from 'react';
import { vinyl_1, vinyl_2, vinyl_3, vinyl_4, vinyl_5 } from '../assets';

const VinylList = () => {

  const vinylArray = [vinyl_1,vinyl_2,vinyl_3,vinyl_4,vinyl_5];

  const [vinyl, setVinyl] = useState(vinyl_1)

  useEffect(() => {
    const toggle = setInterval(() => {
      vinylArray.map((vinyl_img) => {
        setVinyl(vinyl_img);
        console.log(vinyl_img);
      }, 10000);    
    }, [vinyl])
  
    return () => {
      clearInterval(toggle);
    }
  })
  

  return (
    <div>
      <img src={vinyl} alt='vinyl'/>
    </div>
  )
}

export default VinylList