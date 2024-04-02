import React from 'react';

type Props = {
  className: string;
};

const TrafficLight = (props: Props) => {
  const { className = '' } = props;

  // Component
  return <div className={`size-80 rounded-full ${className}`}></div>;
};

export default TrafficLight;
