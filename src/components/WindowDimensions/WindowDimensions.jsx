import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function WindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        return handleResize();
      }, 100)
    );

    return () =>
      window.removeEventListener(
        'resize',
        debounce(() => {
          return handleResize();
        }, 100)
      );
  }, []);

  return windowDimensions;
}

export default WindowDimensions;
