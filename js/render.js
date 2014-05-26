function AddVerticesInStage() {
  colors();
  MaxSize();

  //добавление мешей вершин на сцену
  for ( i = 0; i < arrayTree.length; i++ ) {
    if(arrayTree[i].visual) {
       AddMesh(i, arrayTree[i].levelNode);
    }
  }
}

function colors() { //заполнение массива материалов вершин
  for( i = 0; i < arrayTree.length; i++ ) {
    materials[i] = new THREE.MeshBasicMaterial();
    materials[i].color.setHex( Math.random() * 0xffffff + i );
  }
}

function MaxSize() { //вычисление размеров вершины на сцене
  for ( var i = 0; i <= treeHeight; i++ ) {
    var size = 2048 / Math.pow(2,i);
    var geometry = new THREE.CubeGeometry(size,size,size);
    geometries[i] = geometry;
  }
}

function AddMesh(i, size) { //Добавление вершины на сцену
  var material = materials[i];
  var geometry = geometries[size];

  var mesh = new THREE.Mesh( geometry, material );

  mesh.position.x = arrayTree[i].x;
  mesh.position.y = arrayTree[i].y;
  mesh.position.z = arrayTree[i].z;

  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();

  scene.add(mesh);
  arrayTree[i].id = mesh.id;
}

function Animate() {
  requestAnimationFrame( Animate );
  controls.update();
  render();
}

function render() {
  renderer.render( scene, camera );
}
