import React, { useState } from "react";

function useLogic() {
  const [Num, setNum] = useState(0);
  const [animate, setAnimate] = useState("");
  const [shake, setShake] = useState("");
  // Function to trigger animations
  const shakeBox = () => {
    setShake("shake");

    setTimeout(() => {
      setShake("");
    }, 200);

  };

  const triggerAnim = () => {
    setAnimate("pop");
    setTimeout(()=>{
      setAnimate("")
    },200)
  };

  const increase = () => {
    if (Num < 999) {
      setNum((n) => n + 1);
      triggerAnim();
    } else {
      shakeBox();
    }
  };

  const decrease = () => {
    if (Num > 0) {
      setNum((n) => n - 1);
      triggerAnim();
    } else {
      shakeBox();
    }
  };

  const reset = () => {
    setNum(0);
    triggerAnim();
  };

  return {
    Num,
    shake,
    animate,
    increase,
    decrease,
    reset,
  };
}

export default useLogic;
