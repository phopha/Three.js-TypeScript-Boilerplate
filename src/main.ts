import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera);
})

// new OrbitControls(camera, renderer.domElement)
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function(){
  renderer.render(scene, camera)
});

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

// const clock = new THREE.Clock()
// let delta;
// function animate() {
//   requestAnimationFrame(animate)

//   delta = clock.getDelta();

//   cube.rotation.x += 0.1 * delta;
//   cube.rotation.y += 0.1 * delta;

//   renderer.render(scene, camera)

//   stats.update()
// }

// animate()
renderer.render(scene, camera)