import React from 'react';
import { useSpring, animated } from 'react-spring';

const BlobAnimation = () => {
  const { d } = useSpring({
    from: { d: 'M0,0 L0,0 L0,0 L0,0 Z' },
    to: async (next) => {
      while (1) {
        await next({ d: 'M0,0 L0,0 L0,100 L100,100 Z' });
        await next({ d: 'M0,0 L0,100 L100,100 L100,0 Z' });
        await next({ d: 'M0,100 L100,100 L100,100 L100,100 Z' });
        await next({ d: 'M100,0 L100,100 L100,100 L100,100 Z' });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <animated.path d={d} />
      </svg>
    </div>
  );
};

export default BlobAnimation;
