import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";

const ProgressCircle = ({
  color,
  duration,
  size,
}: {
  color: string;
  duration: number;
  size?: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration); // 2 seconds = 2000ms
      setProgress(newProgress);

      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Progress.Circle
      size={size || 20}
      progress={progress}
      thickness={4}
      color={color}
      borderWidth={0}
    />
  );
};

export default ProgressCircle;
