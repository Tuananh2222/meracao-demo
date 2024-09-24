import { useEffect, useState } from "react";

function AnimatedValue({ start, end, duration }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      setValue(currentValue.toLocaleString("en-US"));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <div>{value}</div>;
}

export default AnimatedValue;
