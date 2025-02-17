import { useState, useEffect } from "react";

const Counter = ({ target, speed = 100 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target <= 0) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

export default Counter;
