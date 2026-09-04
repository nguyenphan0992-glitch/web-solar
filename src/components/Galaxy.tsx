import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GalaxyParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 12000; // Số lượng hạt trong dải thiên hà

  const [positions, colors, particleTexture] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Màu lõi sáng trắng, rìa ngoài màu cam/đỏ lửa của mặt trời
    const colorInside = new THREE.Color("#ffffff");
    const colorOutside = new THREE.Color("#ff5500");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Cấu trúc vòng xoáy thiên hà
      const radius = Math.random() * 5 + 0.1;
      const spinAngle = radius * 1.2;
      const branchAngle = ((i % 5) / 5) * Math.PI * 2; // 5 nhánh xoắn ốc
      
      // Độ phân tán ngẫu nhiên (nhiễu)
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.2;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.2;

      // Tính toán vị trí x, y, z
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * (1 - radius * 0.1); // Dẹt hơn ở rìa
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Pha trộn màu sắc dựa trên khoảng cách từ tâm
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, Math.min(radius / 4, 1));
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    // Tạo texture hạt phát sáng dạng hình tròn mềm
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    return [positions, colors, texture];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    
    // Tự động xoay dải thiên hà
    ref.current.rotation.y = time * 0.05;
    
    // Tương tác với chuột (Hiệu ứng Parallax / Nghiêng)
    const targetX = state.pointer.y * 1.2; // Nghiêng lên xuống
    const targetY = state.pointer.x * 1.2; // Nghiêng trái phải
    
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += (-targetY - ref.current.rotation.z) * 0.05;

    // Tương tác cuộn chuột (Phóng to / Bay xuyên qua)
    const scrollY = window.scrollY;
    // Tăng scale khi cuộn xuống tạo cảm giác bay vào tâm thiên hà
    const scale = 1 + scrollY * 0.003;
    ref.current.scale.set(scale, scale, scale);
    
    // Giảm độ sáng mờ dần khi cuộn đi qua section
    if (ref.current.material) {
      (ref.current.material as THREE.PointsMaterial).opacity = Math.max(0, 0.8 - scrollY * 0.001);
    }
  });

  return (
    <points ref={ref} rotation={[0.5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        map={particleTexture}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export function GalaxyScene() {
  return (
    <div className="absolute inset-0 z-0 h-[120vh] -top-[10vh]">
      <Canvas camera={{ position: [0, 2, 7], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <GalaxyParticles />
      </Canvas>
    </div>
  );
}
