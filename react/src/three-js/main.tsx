import { Canvas } from "@react-three/fiber"

const Main = () => {
  return (
  <div id="canvas-container" className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
  </div>
  )
}

export { Main }
