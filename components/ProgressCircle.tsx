import React, { useEffect, useState } from "react";
import { CircularProgress } from "react-native-circular-progress";

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
      const newProgress = Math.min(elapsed / duration, 1); // 2 seconds = 2000ms
      setProgress(newProgress * 100); // Progress as percentage

      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <CircularProgress
      size={size ? size : 18}
      width={4}
      fill={progress}
      tintColor={color}
      backgroundColor="white"
    />
  );
};

export default ProgressCircle;
