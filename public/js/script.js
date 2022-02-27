//Model class
class Model{
  constructor(objPath, mtlPath) {
    this.objPath = objPath;
    this.mtlPath = mtlPath;
  }
}


var scene_objects = [];

water_bottle = new Model('/bottle/bottle.obj', '/bottle/bottle.mtl');
bike = new Model('/bike/bike.obj', '/bike/bike.mtl');
trash = new Model('/trash/trash.obj', '/trash/trash.mtl');
bag = new Model('/bag/bag.obj', '/bag/bag.mtl');
tree = new Model('/tree/tree.obj', '/tree/tree.mtl');
apple = new Model('/apple/apple.obj', '/apple/apple.mtl');



//Set up model loader
function load(toLoad, pos) {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath('/assets/');
  mtlLoader.setPath('/assets/');
  mtlLoader.load(toLoad.mtlPath, function(materials) {
    materials.preload();
  

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/');
    objLoader.load(toLoad.objPath, function(object) {
      myObj = object;
      object.scale.set(0.05, 0.05,0.05);
      object.position.set(pos[0], pos[1], pos[2]);
      scene.add(object);
      scene_objects.push(object);
    })
    
  })
}
load(water_bottle, [0, 0.9, 0]);
load(bike, [4, 1.2, 0]);
load(trash, [-4, 0.9, 0]);
load(bag, [0, 2.9, 0]);
load(tree, [4, 2.8, 0]);
load(apple, [-4, 3.1, 0]);


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

  for (var i=0; i<scene_objects.length; i++) {
    scene_objects[i].rotation.y += 0.01;
  }
  

}

render();


//bike
//reusable water bottle
//recycling
//lightbulb