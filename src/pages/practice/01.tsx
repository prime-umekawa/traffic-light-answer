import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import TrafficLight from '@/components/trafficLight/TrafficLight';

const CYCLE = {
  green: 'yellow',
  yellow: 'red',
  red: 'green',
} as const;

const Page: NextPage = () => {
  const [light, setLight] = useState<keyof typeof CYCLE>('red');
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLight(CYCLE[light]);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [light]);

  return (
    <div className="mt-8 flex justify-center gap-x-5">
      <TrafficLight className={`${light === 'green' ? 'bg-red-600' : 'bg-gray-400'}`} />

      <TrafficLight className={`${light === 'yellow' ? 'bg-yellow-600' : 'bg-gray-400'}`} />

      <TrafficLight className={`${light === 'red' ? 'bg-green-600' : 'bg-gray-400'}`} />
    </div>
  );
};

export default Page;
