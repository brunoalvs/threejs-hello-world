import { Component } from "react";
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    // Create a new Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    this.mount.appendChild(renderer.domElement);

    // Add  a camera so we can view the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
    scene.add(light);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotateX(0.005);
      cube.rotateY(0.005);
      renderer.render(scene, camera);
    };
    animate();

    scene.add(new THREE.AmbientLight(0x404040));
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default App;
