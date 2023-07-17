import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  start: number,
  max: number,
  speed: number
}

const AnimatedLine = (props: Props) => {
  const [lineWidth, setLineWidth] = useSpring(() => ({ width: `${props.start}%` }));

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = ((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * props.max * props.speed + props.start) as number;

      if (newWidth > props.max) {
        setLineWidth.start({ width: `${props.max}%` });
        return;
      }

      setLineWidth.start({ width: `${newWidth.toFixed(2)}%` });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <animated.div
      className="animated-line h-px bg-blue-500 z-50"
      style={lineWidth}
    />
  );
};

export default AnimatedLine;
