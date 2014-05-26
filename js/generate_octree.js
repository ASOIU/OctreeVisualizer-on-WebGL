function GenerateOctree() { //функция генерации дерева вызываемая нажатием кнопки "создать"
  var startTime = Date.now();
  DeleteAllObjectsScene();       //удаление всех объектов со сцены
  treeHeight = $("#startSizeTree").val(); // определение
  BuildRootTree(treeHeight);
  InterfaceTree();
  AddVerticesInStage();
  Animate();
  var endTime = Date.now();
  console.log(endTime - startTime);
}

function DeleteAllObjectsScene() {
  var object,i;
  for ( i = scene.children.length - 1; i >= 0; i -- ) {
    object = scene.children[ i ];
      scene.remove(object);
  }

  arrayTree.length = 0;
  geometries.length = 0;
  materials.length = 0;
  Octree = new StrucktOctTree;
}
