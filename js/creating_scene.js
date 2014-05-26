function CreatingScene() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 8000);

  camera.position.x = 4000;
  camera.position.y = 4000;
  camera.position.z = 4000;

  mouse3D = new THREE.Vector3( 0, 0, 0 );

  projector = new THREE.Projector();

  renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  $('can').append(renderer.domElement);

  var canvas = document.getElementsByTagName('can');

  controls = new THREE.TrackballControls( camera, canvas[0] );
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  controls.noZoom = false;
  controls.noPan = false;

  controls.staticMoving = true;
  controls.dynamicDampingFactor = 0.3;

  controls.keys = [ 65, 83, 68 ];

  // controls.addEventListener( 'change', renderer );
}

function onWindowResize() {
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}
