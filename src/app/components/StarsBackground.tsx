'use client'
import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { inSphere } from 'maath/random'
import { useRef, useState } from 'react'

const StarsBackground = () => {
  const ref: any = useRef()
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.5 })
  )
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 30
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color='#b23de9'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full fixed inset-0 bg-[#130720]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarsBackground />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
