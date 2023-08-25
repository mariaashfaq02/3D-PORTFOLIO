import {Suspense,useEffect,useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Mesh } from 'three';

const Computers = ({isMobile}) => {
  const computer=useGLTF("./public/desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={1.85} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1.5}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile?0.7:0.75}
        position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
   </mesh> 
  )
}

const ComputersCanvas=()=>{

  //for the scrolling thingy to work on mobiles

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add a listener for changes to screen size
    const mediaQuery=window.matchMedia('(max-width:500px)');

    //set initial value of 'isMobile' state variable 
    setIsMobile(mediaQuery.matches);

    //whenever width changes
    //defining call back function to handle changes to media query
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    //add the callback function as a listener for changes to media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
  
    return () => {
      //remove listener when component is unmounted
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])
  
  return(
    <Canvas 
      frameloop='demand'
      shadows
      camera={{position:[20,3,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas
