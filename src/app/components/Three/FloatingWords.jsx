'use client'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls, Points } from '@react-three/drei'

function Word({ children, ...props }) {
  const [textOpacity, setTextOpacity] = useState(0)
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 4,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame((camera, delta) => {
    textRef.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    )

    if (textOpacity < 1) {
      setTextOpacity((opacity) => Math.min(opacity + 0.01, 1))
    }
  })

  return (
    <Billboard {...props}>
      <Text
        ref={textRef}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
        {...fontProps}
        children={children}
        fillOpacity={textOpacity}
      />
    </Billboard>
  )
}

function Cloud({ phrases, radius = 20 }) {
  const [cloudOpacity, setCloudOpacity] = useState(0)
  const cloudRef = useRef()

  // Create a count x count random words with spherical distribution
  const count = phrases.length
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const goldenRatio = (Math.sqrt(5) + 1) / 2
    for (let i = 0; i < count; i++) {
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(
            radius,
            Math.acos(1 - (2 * (i + 0.5)) / count),
            (2 * Math.PI * i) / goldenRatio
          )
        ),
        phrases[i],
      ])
    }
    return temp
  }, [count, radius])

  useFrame((state, delta) => {
    cloudRef.current.rotation.x -= delta / 10
    cloudRef.current.rotation.y -= delta / 4
  })

  return (
    <Points ref={cloudRef}>
      {words.map(([pos, word], index) => (
        <Word
          key={index}
          position={pos}
          children={word}
          opacity={cloudOpacity}
        />
      ))}
    </Points>
  )
}

const phrases = [
  '4.0 GPA',
  'National Merit Scholar',
  'Honors College',
  'Summa Cum Laude',
  "8x President's List",
  'B.S. in Computer Science',
  'Minor in Economics',
  'Full-ride academic scholarship',
  'VP of Operations, CIMG',
]

const FloatingWordsCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach='fog' args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[0, 0, 0]}>
          <Cloud phrases={phrases} radius={20} />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default FloatingWordsCanvas
