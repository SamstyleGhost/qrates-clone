import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomButton = ({ url, text, isFilled }) => {
  return (
    <NavLink to={url} className={`${isFilled ? 'bg-black text-white' : 'border-2 border-black'} font-semibold px-6 py-3 rounded-full text-center`}>
      {text}
    </NavLink>
  )
}

export default CustomButton