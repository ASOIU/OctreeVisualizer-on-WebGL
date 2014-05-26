function onDocumentMouseDown(event){
  if(isCtrlDown){                    //Определение вершины дерева, которая будет разделения
    event.preventDefault();

    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );

    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( scene.children );

    intersector = getRealIntersector( intersects );

    if ( intersector != null ) {
      ScissionJunction(intersector.object.id); //функция разделения вершины
    }
  }
}

function onDocumentMouseMove( event ) {
  event.preventDefault();

  if(isShiftDown){

    mouse3D.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse3D.y = -( event.clientY / window.innerHeight ) * 2 + 1;
  }

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}


function onDocumentKeyDown( event ) {
  switch( event.keyCode ) {
    case 16: isShiftDown = true; break;
    case 17: isCtrlDown = true; break;
  }
}

function onDocumentKeyUp( event ) {
  switch ( event.keyCode ) {
    case 16: isShiftDown = false; break;
    case 17: isCtrlDown = false; break;
  }
}

// function MotionCamera() {
//   if ( isShiftDown ) {
//     thetaX += mouse3D.x * 1.5;
//     thetaY += mouse3D.y * 1.5;
//   }

//   camera.position.x = 4000 * Math.sin( THREE.Math.degToRad( thetaX ) ) ;
//   camera.position.y = 4000 * Math.sin( THREE.Math.degToRad( thetaY ) );
//   camera.position.z = 4000 * Math.cos( THREE.Math.degToRad( thetaX ) );

//   camera.lookAt( scene.position );

//   }
