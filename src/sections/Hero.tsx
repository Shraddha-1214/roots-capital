import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { HeroProps } from '../types';
import * as THREE from 'three';
import Button from '../components/Button';

// --- Theme Constants ---
const NODE_COUNT = 48;
const SPREAD_X = 14;
const SPREAD_Y = 8;
const CONNECTION_DISTANCE = 3.8;
const LINE_COLOR = new THREE.Color('#1E293B');   // Deep slate for subtle lines
const PULSE_COLOR = new THREE.Color('#F59E0B');  // Brighter Gold for "glow"
const MAX_ACTIVE_PULSES = 10;                     
const PULSE_SPEED = 0.45; 

interface EdgeData { start: THREE.Vector3; end: THREE.Vector3; }
interface PulseState { edgeIdx: number; progress: number; direction: 1 | -1; }

function buildGraph(nodeCount: number) {
  const nodes = Array.from({ length: nodeCount }, () => ({
    position: new THREE.Vector3((Math.random() - 0.5) * SPREAD_X, (Math.random() - 0.5) * SPREAD_Y, 0),
  }));
  const edges: EdgeData[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].position.distanceTo(nodes[j].position) < CONNECTION_DISTANCE) {
        edges.push({ start: nodes[i].position, end: nodes[j].position });
      }
    }
  }
  return { nodes, edges };
}

const NetworkScene: React.FC<{ mouse: React.MutableRefObject<[number, number]>, edges: EdgeData[], nodes: any[] }> = ({ mouse, edges }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<PulseState[]>([]);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useMemo(() => {
    pulsesRef.current = Array.from({ length: MAX_ACTIVE_PULSES }, (_, i) => ({
      edgeIdx: Math.floor(Math.random() * edges.length),
      progress: i / MAX_ACTIVE_PULSES,
      direction: (Math.random() > 0.5 ? 1 : -1) as 1 | -1,
    }));
  }, [edges.length]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current[0] * 0.15, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.current[1] * 0.15, 0.05);
    }
    pulsesRef.current.forEach((pulse, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;
      pulse.progress += delta * PULSE_SPEED * pulse.direction;
      if (pulse.progress >= 1 || pulse.progress <= 0) {
        pulse.edgeIdx = Math.floor(Math.random() * edges.length);
        pulse.progress = pulse.direction === 1 ? 0 : 1;
      }
      const edge = edges[pulse.edgeIdx];
      mesh.position.lerpVectors(edge.start, edge.end, pulse.progress);
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 2 + Math.sin(pulse.progress * Math.PI) * 3;
    });
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <lineSegments>
        <bufferGeometry attach="geometry" {...new THREE.BufferGeometry().setFromPoints(edges.flatMap(e => [e.start, e.end]))} />
        <lineBasicMaterial color={LINE_COLOR} transparent opacity={0.1} />
      </lineSegments>
      {pulsesRef.current.map((_, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={PULSE_COLOR} emissive={PULSE_COLOR} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  const mouse = useRef<[number, number]>([0, 0]);
  const { nodes, edges } = useMemo(() => buildGraph(NODE_COUNT), []);

  return (
    <section 
      onMouseMove={(e) => (mouse.current = [(e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1])}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wealth-navy"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
          <NetworkScene mouse={mouse} edges={edges} nodes={nodes} />
        </Canvas>
      </div>
      
      {/* Spotlight effect for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_85%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div data-aos="zoom-out-up" className="space-y-8">
          <span className="text-wealth-gold font-bold tracking-[0.4em] uppercase text-xs">Premium Wealth Advisory</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-tight">
            Connected to roots of <br/> every <span className="text-wealth-gold italic">financial need.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Educating individuals in an easy-to-understand manner so they can grasp personal finance and pursue their financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            <Button variant="primary" size="lg" className="px-10 py-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]" onClick={onCtaClick}>
              Get Started
            </Button>
            <button className="text-white/80 hover:text-wealth-gold transition-all font-bold uppercase tracking-widest text-sm" onClick={onSecondaryCtaClick}>
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;