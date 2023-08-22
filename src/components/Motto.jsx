import React from 'react'
import { ArrowDown } from 'react-feather';

const Motto = () => {
  return (
    <div className='pt-[47px] font-semibold text-2xl text-center md:text-left md:w-2/3'>
      {/* //TODO There is a weird non-functioning down-arrow at the end of the text. Find a way to fit it in*/}
      <span>We make it easy for artists to make vinyl and cassettes,so fans can keep pieces of the music they love.<ArrowDown /></span>
    </div>
  )
}

export default Motto