import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './style.css';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Camera on the +Z side looking in through the open wall
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.6, 5);
camera.lookAt(0, 1.0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap for mobile performance
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights: flat fill plus a "sun"
scene.add(new THREE.AmbientLight(0xffffff, 1.5));
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(3, 5, 4);
scene.add(sun);

// Load the Blender room. BASE_URL keeps the path correct when the site is
// deployed under /barracks/ on GitHub Pages later.
const loader = new GLTFLoader();
loader.load(
  `${import.meta.env.BASE_URL}models/room.glb`,
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.traverse((obj) => {
      if (obj.name) console.log(obj.type, obj.name);
    });
  },
  undefined,
  (error) => console.error('Failed to load room.glb', error),
);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});