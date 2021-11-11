import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls, Plane } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
const ThreeTest = () => {

    return (
        <div className="canvas-container"  >
            <Canvas
                style={{ height: '100vh' }}>
                {/* <Foo /> */}
                <OrbitControls />
                <Stars />
                <axesHelper />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Planet position={[-6, 3.5, -1]} />
                <Planet position={[6.5, 4, -0.5]} />
                <Planet position={[1, -3, 1]} />
                {/* <_Plane /> */}
            </Canvas>
        </div>

    );
}

function Foo() {
    const set = useThree((state) => state.set)
    set({ frameloop: 'demand' })
    return null
}


function Planet(props) {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)
    const mesh = useRef()
    useFrame(() => { mesh.current.rotation.z += 0.01 })
    return (
        <mesh
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => { setActive(!active) }}
            onPointerEnter={() => { setHover(true) }}
            onPointerOut={() => { setHover(false) }}
            {...props}
        >
            <sphereGeometry widthSegments={32} heightSegments={16} />
            <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Box() {
    return (
        <mesh
            position={[0, 0.5, 0]}
            // ref={ref}
            onClick={() => {
                api.velocity.set(0, 2, 0)
            }}
        >
            <boxBufferGeometry />
            <meshLambertMaterial color='pink' />
        </mesh>
    )
}

function _Plane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[10, 10]} />
        </mesh>
    )
}
export default ThreeTest;
