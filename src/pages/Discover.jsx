import React from 'react';
import { ImageCarousel, Vinyl } from '../components';
import { artist_6, artist_8, artist_3, vinyl_1 } from '../assets';
import { NavLink } from 'react-router-dom';

const Discover = () => {

  const ImagesArray = [
    {
      img: artist_6,
      url: 'https://www.pexels.com/photo/man-playing-bass-electric-guitar-2649113/',
      title: 'Martin Lopez',
      content: 'Guitar-based folk, indie, blues, rock and everything in-between.'
    },
    {
      img: artist_8,
      url: 'https://www.pexels.com/photo/fashion-man-people-street-18071746/',
      title: 'Matthew  Twin',
      content: 'Dazzling drops of breaks, rhythm & rhyming in hip hop & rap.'
    },
    {
      img: artist_3,
      url: 'https://www.pexels.com/photo/man-sitting-on-bed-with-vinyl-records-12987619/',
      title: 'Okay Imagery',
      content: 'From DIY parties in South Bronx, New York to anime-infused rap in 2023, hip-hop continues to live and in a refreshingly eclectic way'
    }
  ]

  return (
    <div>
      <div className='mb-4 md:mb-0'>
        <ImageCarousel 
          images={ImagesArray}
        />
      </div>
      <div className='bg-[#dba134] pt-4 px-8 border-2 border-black'>     
        <div className='border-2 border-black text-center w-[225px] text-sm font-semibold p-1 bg-white'>
          PROJECT OF THE WEEK
        </div>
        <div className='flex flex-col md:flex-col-reverse mt-16 md:mt-4'>
          <div className='md:mt-16 flex justify-center'>
            <Vinyl 
              vinyl_img={vinyl_1}
            />
          </div>
          <div className='flex flex-col w-1/2 mt-16 md:mt-4'>
            <span className='font-bold text-3xl'>The Midst of Things</span>
            <span className='font-semibold text-3xl'>MMYYKK</span>
            <span className='font-medium text-lg'>Soul, Electronic, HipHop/Rap, R&B, Jazz</span>
          </div>
        </div>
        <div className='font-semibold my-8 underline md:relative md:text-right'>
          <span><NavLink to='../projects'>EXPLORE THE PROJECT</NavLink></span>
        </div>
      </div>
    </div>
  )
}

export default Discover