import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const particleCount = isMobile ? Math.floor(count * 0.3) : count;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.003 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [particleCount]);

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, particleCount]);

  useFrame(() => {
    const pos = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3 + 1] -= particles[i].speed;
      if (pos[i * 3 + 1] < -2) pos[i * 3 + 1] = Math.random() * 10 + 5;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={isMobile ? 0.03 : 0.05}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
