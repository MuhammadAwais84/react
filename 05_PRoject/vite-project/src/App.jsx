import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [btntxt, setBtntxt] = useState("Stop");
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const handleBtn = () => {
    setRunning(!running);
    setBtntxt(running ? "Start" : "Stop");
  };

  return (
    <div className="clock-container">
      <h1 className="clock-title">🕒 React Live Clock</h1>
      <h2 className="clock-time">{time}</h2>
      <button
        className={`clock-btn ${running ? "stop" : "start"}`}
        onClick={handleBtn}
      >
        {btntxt}
      </button>
    </div>
  );
};

export default App;
