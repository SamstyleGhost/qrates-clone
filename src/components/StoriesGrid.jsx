import React from 'react';
import { storiesArray } from '../constants'

const StoriesGrid = ({ storyIndex }) => {

  return (
    <div className='lg:max-h-1/2 overflow-hidden'>
      <div className='absolute text-sm font-semibold text-black bg-white border-2 border-black px-2 py-1 m-4'>
        {storiesArray[storyIndex].view}
      </div>
      <div className='h-screen flex flex-col justify-center items-center text-white' style={{ backgroundImage: `url(${storiesArray[storyIndex].content[0].img})`, backgroundSize: 'cover', backgroundPositionX: 'center'}}>
        <div className='font-medium text-xl px-4 text-center'>{storiesArray[storyIndex].content[0].top}</div>
        <div className='font-bold text-5xl px-4 text-center underline'>{storiesArray[storyIndex].content[0].title}</div>
        <div className='font-semibold mt-12 md:mt-16 px-4 text-center'>{storiesArray[storyIndex].content[0].content}</div>
        <div className='font-medium text-[10px] mt-4 px-4 text-center'>{storiesArray[storyIndex].content[0].date}</div>      
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-2/3 border-t md:border border-black'>
          <div>
            <div className='absolute text-sm font-semibold text-black bg-white border-2 border-black px-2 py-1 m-4'>
              {storiesArray[storyIndex].view}
            </div>
            <img src={storiesArray[storyIndex].content[1].img} alt='grid-img'className='w-full'/>
          </div>
          <div className='m-4'>
            <div className='font-medium text-lg md:text-2xl'>{storiesArray[storyIndex].content[1].top}</div>
            <div className='font-semibold text-xl md:text-3xl'>{storiesArray[storyIndex].content[1].title}</div>
            <div className='font-medium md:text-xl mt-4'>{storiesArray[storyIndex].content[1].content}</div>
            <div className='font-medium text-[10px] mt-4'>{storiesArray[storyIndex].content[1].date}</div>
          </div>
        </div>
        <div className='flex flex-col w-full md:w-1/3 border-t md:border border-black'>
          <div>
            <div className='absolute text-sm font-semibold text-black bg-white border-2 border-black px-2 py-1 m-4'>
              {storiesArray[storyIndex].view}
            </div>
            <img src={storiesArray[storyIndex].content[2].img} alt='grid-img' className='w-full'/>
          </div>
          <div className='m-4 md:flex md:flex-col md:justify-between md:h-full'>
            <div>
              <div className='font-medium text-lg md:text-2xl'>{storiesArray[storyIndex].content[2].top}</div>
              <div className='font-semibold text-xl md:text-3xl'>{storiesArray[storyIndex].content[2].title}</div>
              <div className='font-medium md:text-xl mt-4'>{storiesArray[storyIndex].content[2].content}</div>
            </div>
            <div className='font-medium text-[10px]'>{storiesArray[storyIndex].content[2].date}</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default StoriesGrid