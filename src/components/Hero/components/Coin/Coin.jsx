import React, { useEffect,useState, useRef,Suspense } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import { Overlays } from './components'
import { Environment, ScrollControls, useGLTF} from "@react-three/drei"
import "./Coin.css"


const Experience = ()=>{
  const img = useGLTF("./coin.glb");
  const coinRef = useRef();
  const [scale,setScale] = useState(.85)


  useFrame(()=>{
        coinRef.current.rotation.y += .01;
        coinRef.current.rotation.x += .01;
  })

  useEffect(()=>{
    if(innerWidth < 850){
        setScale(.35)
    }
  })
  return(
    <group ref={coinRef} scale={scale} position={[-.25,0,1]} rotation={[Math.PI * -.15,Math.PI * .5,0]}>
      <primitive object={img.scene}/>
    </group>
  )
}


const Loader=()=> {
  return <span>Loading 3D model...</span>;
}

const Coin = () => {
  return (
    <div className="canvas-parent-div">
        <Canvas>
          <Suspense fallback={<Loader/>}>
          <ScrollControls pages={4}>
            <ambientLight/>
            <Overlays/>
            <Environment preset="city"/>
            <Experience/>
          </ScrollControls>
          </Suspense>
        </Canvas>
    </div>
  )
}

export default Coin