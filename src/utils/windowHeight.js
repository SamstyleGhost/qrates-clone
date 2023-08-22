import {useState, useEffect } from 'react';

export const useWindowHeight= () => {
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerWidth);
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => { 
      window.removeEventListener("resize", handleResize);
    }
  }, [setHeight]);
  
  return height;
}
