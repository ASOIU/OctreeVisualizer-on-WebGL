function AddEventListener() {
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  // document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.addEventListener( 'keydown', onDocumentKeyDown, false );
  document.addEventListener( 'keyup', onDocumentKeyUp, false );
  window.addEventListener( 'resize', onWindowResize, false );
}
