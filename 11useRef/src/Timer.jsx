import React from "react";
import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [Timer, setTimer] = useState(0);
  const IntervalRef = useRef(null);

  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setTimer((Timer) => Timer + 1);
    }, 1000);
    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);

  return <div><div>Timer : {Timer} S</div>
  <button onClick={clearInterval(IntervalRef.current)}> StopTimer </button>
  </div>;

};

export default Timer;
