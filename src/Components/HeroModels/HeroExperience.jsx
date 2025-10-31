import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useMemo } from "react";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const pixelRatio = useMemo(
    () => Math.min(window.devicePixelRatio, isMobile ? 1 : 2),
    [isMobile]
  );

  const showParticles = !isMobile;
  const showHeroLights = !isMobile;

  const cameraProps = useMemo(
    () => ({
      position: [0, 0, 15],
      fov: isMobile ? 55 : 45,
      near: 0.1,
      far: 100,
    }),
    [isMobile]
  );

  return (
    <Canvas
      camera={cameraProps}
      dpr={pixelRatio}
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        {showHeroLights && <HeroLights />}
        {showParticles && <Particles />}

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
