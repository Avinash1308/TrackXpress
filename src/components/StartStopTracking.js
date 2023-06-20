import React, { useState } from 'react';

const StartStopTracking = ({ onStart, onStop }) => {
  const [isTracking, setIsTracking] = useState(false);

  const handleStart = () => {
    setIsTracking(true);
    onStart();
  };

  const handleStop = () => {
    setIsTracking(false);
    onStop();
  };

  return (
    <div>
      {isTracking ? (
        <button onClick={handleStop}>Stop Tracking</button>
      ) : (
        <button onClick={handleStart}>Start Tracking</button>
      )}
    </div>
  );
};

export default StartStopTracking;

