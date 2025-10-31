import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

const HeroLights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const currentHour = new Date().getHours();

  const { color, intensity, angle } = useMemo(() => {
    if (currentHour >= 4 && currentHour < 10) {
      return { color: "#4361ee", intensity: 5, angle: 0.25 };
    } else if (currentHour >= 10 && currentHour < 16) {
      return { color: "#ffd166", intensity: 60, angle: 0.4 };
    } else if (currentHour >= 16 && currentHour < 22) {
      return { color: "#4cc9f0", intensity: 50, angle: 0.35 };
    } else {
      return { color: "#89CFF0", intensity: 20, angle: 0.25 };
    }
  }, [currentHour]);

  const mobileIntensity = intensity * 0.4;

  return (
    <>
      <spotLight
        position={[4, 5, 4]}
        angle={angle}
        intensity={isMobile ? mobileIntensity : intensity}
        penumbra={0.5}
        color={color}
        castShadow={!isMobile}
      />

      {!isMobile && (
        <>
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
      )}
    </>
  );
};

export default HeroLights;
