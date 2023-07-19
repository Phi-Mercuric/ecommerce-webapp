import { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  start: number,
  max: number,
  speed: number
}

export default function AnimatedLine(props: Props) {
  const [lineWidth, setLineWidth] = useSpring(() => ({ width: `${props.start}%` }));
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    // Get yOffset of React Node element
    const nodeOffset = node
      ? node.getBoundingClientRect().top + window.scrollY
      : 0;

    // Modifier to change speed so that the line finished anim at top of user's page
    const speedModifier = (props.max - props.start) / props.max

    // Calculate anim offset and speed so that it is relative to page and other settings
    const [animOffset, speed] = nodeOffset - window.innerHeight > 0
      ? [nodeOffset - window.innerHeight, props.speed * speedModifier]
      : [props.start, props.speed * (window.innerHeight / nodeOffset) * speedModifier];

    // Calculate new width of line
    const handleScroll = () => {
      const newWidth = (((window.scrollY - animOffset) / (window.innerHeight - props.start)) * props.max * speed + props.start) as number;
      if (newWidth > props.max)
        setLineWidth.start({ width: `${props.max}%` });
      else
        setLineWidth.start({ width: `${newWidth.toFixed(2)}%` });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Center the line
    <div className='flex flex-col items-center w-full' ref={nodeRef}>
      <animated.div
        className="animated-line h-px bg-blue-500 z-100"
        style={lineWidth}
      />
    </div>
  );
};
