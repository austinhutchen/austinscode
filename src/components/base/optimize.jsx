import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// mobile wrapper 
export const MyWrapperComponent = (props) => {
  const isMobile = useMediaQuery({query: '(max-width: 1000px)'});
  const textStyle = isMobile ? 'text-mobile' : 'text-desktop';

  return (
      <div className={textStyle}>
          {props.children}
      </div>
  )
}