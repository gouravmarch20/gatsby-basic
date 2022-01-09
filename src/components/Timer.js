import { useEffect, useState } from "react";

import React from 'react'

const Timer = ({ setTimeOut, questionNumber }) => {
  const [timer, setTimer] = useState(25);

  // time case : if 0 return time out , else decrease one from current time
  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    // stop setTimer in 1 sec --> return interval value to setTimer
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

// time reset at quest in change
  useEffect(() => {
    // it will run until time is not 0 
    setTimer(25);
  }, [questionNumber]);
  return (
    <>
      {timer}
    </>
  )
}

export default Timer
