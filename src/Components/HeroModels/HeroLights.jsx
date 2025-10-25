import { useMemo } from "react";

const HeroLights = () => {
  const currentHour = new Date().getHours();

  const { color, intensity, angle } = useMemo(() => {
    if (currentHour >= 4 && currentHour < 10) {
      return {
        color: "#4361ee",
        intensity: 5,
        angle: 0.25,
      };
    } else if (currentHour >= 10 && currentHour < 16) {
      return {
        color: "#ffd166",
        intensity: 80,
        angle: 0.4,
      };
    } else if (currentHour >= 16 && currentHour < 22) {
      return {
        color: "#4cc9f0",
        intensity: 70,
        angle: 0.35,
      };
    } else {
      return {
        color: "#89CFF0",
        intensity: 25,
        angle: 0.25,
      };
    }
  }, [currentHour]);

  return (
    <>
      <spotLight
        position={[4, 5, 4]}
        angle={angle}
        intensity={intensity}
        penumbra={0.5}
        color={color}
      />
      <spotLight
        position={[-4, 5, 4]}
        angle={angle}
        intensity={intensity * 0.9}
        penumbra={0.5}
        color={color}
      />
      <spotLight
        position={[0, 6, -3]}
        angle={angle}
        intensity={intensity * 0.7}
        penumbra={0.5}
        color={color}
      />
    </>
  );
};

export default HeroLights;
