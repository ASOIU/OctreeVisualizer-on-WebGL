//рекурсивная функция создания дерева
function BuildNodeTree( treeHeight, root ) {
  if( (treeHeight - root.levelNode) > 0 ) {

    var coordinateOffset = 2048 / Math.pow(2,root.levelNode);

    for( var i = 1, j = 1, t = 1; i < 9; i++ ) {

      var node = new StrucktOctTree;

      node.levelNode = root.levelNode + 1;

      if( node.levelNode == treeHeight) {
        node.visual = true;
      }
      else node.visual = false;

        a = Math.pow(-1, i);
        b = Math.pow(-1, j);
        c = Math.pow(-1, t);

        node.x = root.x + a * coordinateOffset / 4;
        node.y = root.y + b * coordinateOffset / 4;
        node.z = root.z + c * coordinateOffset / 4;

        node = BuildNodeTree( treeHeight, node);

        node.numberArray = arrayTree.length;

        root.child.push(node.numberArray);
        arrayTree.push(node);

        if(i % 2 == 0) j++;
        if(i % 4 == 0) t++;
    }
  }
  return root;
}

function AddRootNode() {
  for( var i = 0; i < arrayTree.length; i++ ) {
    if( arrayTree[i].child.length > 0 ) {
      for( child in arrayTree[i].child ) {
        var element = arrayTree[i].child[child];
        arrayTree[element].Octree_up = i;
      }
    }
  }
}

function BuildRootTree(treeHeight) {
  if( treeHeight == 0 ) {
    Octree.visual = true;
  }
  else Octree.visual = false;

  Octree.levelNode = 0;
  Octree.numberArray = 0;
  Octree.Octree_up = null;

  Octree.x = 0;
  Octree.y = 0;
  Octree.z = 0;
  arrayTree.push(Octree);
  Octree = BuildNodeTree(treeHeight, Octree);
  AddRootNode();
}

function getRealIntersector( intersects ) { //выбор ближайшего объекта из попавших в сектор нажатия
  for( i = 0; i < intersects.length; i++ ) {
    intersector = intersects[ i ];
    return intersector;
  }

  return null;
}
