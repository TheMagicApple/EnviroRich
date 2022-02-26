//Set up model loader
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/assets/');
mtlLoader.setPath('/assets/');
mtlLoader.load("/trash/trash.mtl", function(materials) {
  materials.preload();
  

  



  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('/assets/');
  objLoader.load("/trash/trash.obj", function(object) {
    myObj = object;
    object.scale.set(0.05, 0.05,0.05);
    scene.add(object);
  })
  
})



//Three.js setup

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 2;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#FFFFFF");
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


//bike
//reusable water bottle
//recycling
//lightbulb