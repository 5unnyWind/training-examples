import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls, Plane, useNormalTexture } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import { MeshNormalMaterial, MeshToonMaterial } from 'three';
const ThreeTest = () => {

    return (
        <div className="canvas-container"  >
            <Canvas
                style={{ height: '100vh' }}>

                <Suspense fallback={('loading...')}>
                    {/* <Planet position={[-6, 3.5, -1]} color='#27282a' />
                    <Planet position={[6.5, 4, -0.5]} color='#53607b' />
                    <Planet position={[1, -3, 1]} color='#92411e' /> */}
                </Suspense>
                {/* <_Plane /> */}
            </Canvas>
        </div>

    );
}

{/* <OrbitControls />
<Stars />
<ambientLight intensity={0.5} />
<spotLight position={[10, 15, 10]} angle={0.3} /> */}


function Planet(props) {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)
    const {
        color = 'orange',
        position,
    } = props

    const [normalMap, _] = useNormalTexture(
        25,
        {
            offset: [0, 0],
            anisotropy: 8
        }
    )
    const mesh = useRef()
    useFrame(() => { mesh.current.rotation.z += 0.01 })
    return (
        <mesh
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => { setActive(!active) }}
            onPointerEnter={() => { setHover(true) }}
            onPointerOut={() => { setHover(false) }}
            position={position}
        >
            <sphereGeometry widthSegments={32} heightSegments={16} />
            <meshStandardMaterial color={color} normalMap={normalMap} />
            {/* color={hover ? 'hotpink' : 'orange'} */}
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



function Foo() {
    const set = useThree((state) => state.set)
    set({ frameloop: 'demand' })
    return null
}



export default ThreeTest;
