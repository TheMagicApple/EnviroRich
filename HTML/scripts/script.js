//Set up model loader
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/assets/');
mtlLoader.setPath('/assets/');
mtlLoader.load("/cube/cube.mtl", function(materials) {
  materials.preload();
  
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('/assets/');
  objLoader.load("/cube/cube.obj", function(object) {
    myObj = object;
    object.scale.set(0.5, 0.5, 0.5);
    scene.add(object);
  })
  
})



//Three.js setup

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Resizing window
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  
})


//Lights
var light = new THREE.PointLight(0xFFFFFF, 0.5, 500);
light.position.set(10, 0, 25);
scene.add(light);

var light2 = new THREE.PointLight(0xFFFFFF, 0.5, 500);
light2.position.set(-10, 0, 25);
scene.add(light2);



//Render
var render = function() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
  myObj.rotation.y += 0.01;

}

render();