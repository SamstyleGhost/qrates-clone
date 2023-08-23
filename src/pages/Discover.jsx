import React from 'react';
import { ImageCarousel } from '../components';
import { artist_6, artist_8, artist_3 } from '../assets';

const Discover = () => {

  const ImagesArray = [
    {
      img: artist_6,
      url: 'https://www.pexels.com/photo/man-playing-bass-electric-guitar-2649113/',
      title: 'Photo by Martin Lopez',
      content: 'Guitar-based folk, indie, blues, rock and everything in-between.'
    },
    {
      img: artist_8,
      url: 'https://www.pexels.com/photo/fashion-man-people-street-18071746/',
      title: 'Photo by Matthew  Twin',
      content: 'Dazzling drops of breaks, rhythm & rhyming in hip hop & rap.'
    },
    {
      img: artist_3,
      url: 'https://www.pexels.com/photo/man-sitting-on-bed-with-vinyl-records-12987619/',
      title: 'Photo by Okay Imagery',
      content: 'From DIY parties in South Bronx, New York to anime-infused rap in 2023, hip-hop continues to live and in a refreshingly eclectic way'
    }
  ]

  return (
    <div>
      <ImageCarousel 
        images={ImagesArray}
      />
    </div>
  )
}

export default Discover