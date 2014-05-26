var scene,camera,renderer;

var projecter,vector,interested;

var mouse = new THREE.Vector2();

var mouse3D, isShiftDown = false,
  thetaX = 45,thetaY = 45,thetaZ = 45, isCtrlDown = false; //переменные для управления сценой

var treeHeight; //максимальная глубина дерева

//Дерево
var Octree = new StrucktOctTree;
var arrayTree = [];

var geometries = [];  // массив геометрий для вершин дерева (размер)
var materials = [];   // массив материалов для вершин дерева (цвет)

//Установка параметров сцены и создание сцены
CreatingScene();

//навешиваем слушателей на страницу
AddEventListener();

function Consol(i) {
  console.log(i);
}

window.onload = function() {
  $('.Tree').css('height', function(){
    return windowsize = window.innerHeight;
  });
  $('.Tree').css('width', function(){
    return windowsize = ((window.innerWidth / 100) * 19);
  });

  ShowValue($('.interface input[type=range]').val());
}
