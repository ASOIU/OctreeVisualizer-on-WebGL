function ScissionJunction(id) {            //разделение вершины дерева
  for( var i = 0; i < arrayTree.length; i++ ) {
    if( arrayTree[i].id == id )  {
      AddChildren(i);
    }
  }
}

function ShiftNodeCSS(i){
    return i * 20;
}

function InterfaceTree() {
  $('tree').empty();
  AddDivNode(0);
  $('tree div:last').css('margin-left', ShiftNodeCSS(arrayTree[0].levelNode));
  TODO(0);
}

function TODO(m) {
  if( arrayTree[m].child.length > 0) {
    for (var i = 0; i < arrayTree[m].child.length; i++) {
      var element = arrayTree[m].child[i];
      AddDivNode(element);
      $('tree div:last').css('margin-left', ShiftNodeCSS(arrayTree[element].levelNode));
      TODO(element);
    }
  }
}

function AddDivNode(i) {
  $('tree').append('<div id="' + i + '"></div>');

  if( arrayTree[i].child == 0 && arrayTree[i].visual == true ) {
    $('tree div:last').append('<input id="1" type="button" value="+" onClick="AddChildren(' + i + ')"/>');
  }

  if( arrayTree[i].child != 0 && arrayTree[i].visual == false ) {
    $('tree div:last').append('<input id="1" type="button" value="-" onClick="DeleteChildren(' + i + ')"/>');
  }

  if( arrayTree[i].child == 0 && arrayTree[i].visual == true ) {
    $('tree div:last').append('<input id="2" type="button" value="X" onClick="VisualNodeFalse(' + i + ')"/>');
  }

  if( arrayTree[i].child == 0 && arrayTree[i].visual == false ) {
    $('tree div:last').append('<input id="2" type="button" value="V" onClick="VisualNodeTrue(' + i + ')"/>');
  }
  $('tree div:last').append('<input id="3" type="button" value="' + "вершина:" + i + '" onClick="AddChildren(' + i + ')"/><br>');
}

function DeleteNode(n) {
  for ( i = 0; i <= scene.children.length; i++ ) {
    object = scene.children[i];
    if( arrayTree[n].id == object.id ) {
      scene.remove(object);
      break;
    }
  }
}

function VisualNodeFalse(n) {
  arrayTree[n].visual = false;
  $('tree div#' + n + ' input[id=1]').remove();
  $('tree div#' + n + ' input[id=2]').replaceWith('<input id="2" type="button" value="V" onClick="VisualNodeTrue(' + n + ')"/>');
  DeleteNode(n);
}

function VisualNodeTrue(n) {
  arrayTree[n].visual = true;
  $('tree div[id=' + n +']').prepend('<input id="1" type="button" value="+" onClick="AddChildren(' + n + ')"/>');
  $('tree div#' + n + ' input[id=2]').replaceWith('<input id="2" type="button" value="X" onClick="VisualNodeFalse(' + n + ')"/>');
  AddNode(n);
}

function AddChildren(n) {
  DeleteNode(n);
  arrayTree[n].visual = false;
  if( arrayTree[n].levelNode == treeHeight ) {
    treeHeight++;
    MaxSize();
  }

  var next = arrayTree.length;

  BuildNodeTree(arrayTree[n].levelNode + 1, arrayTree[n]);

  colors();
  for( var i = next; i < arrayTree.length; i++ ) {
    AddMesh(i, arrayTree[i].levelNode);
  }
  AddOneRoot(n);
  InterfaceTree();
}

function DeleteChildren(n) {
  while (arrayTree[n].child.length > 0) {
    t = arrayTree[n].child[0];
    DeleteNode(t);
    arrayTree[t] = undefined;
    arrayTree[n].child.splice(0,1);
  }
  arrayTree[n].visual = true;
  VisualNodeTrue(n);
  InterfaceTree();
}

function AddNode(n) {
  AddMesh(n, arrayTree[n].levelNode);
}

function AddOneRoot(n) {
  for( child in arrayTree[n].child ) {
    var element = arrayTree[n].child[child];
    arrayTree[element].Octree_up = n;
  }
}
