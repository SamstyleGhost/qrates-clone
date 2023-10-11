import React from 'react';
import { StoriesGrid } from '../components';

const Stories = () => {
  return (
    <div>
      <div><StoriesGrid storyIndex='0'/></div>
      <div><StoriesGrid storyIndex='1'/></div>
      <div><StoriesGrid storyIndex='2'/></div>
    </div>
  )
}

export default Stories