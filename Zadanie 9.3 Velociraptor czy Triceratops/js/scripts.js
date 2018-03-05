// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var triceratopsUpperCased = dinosaur.replace('Triceratops','Triceratops'.toUpperCase());

console.log(triceratopsUpperCased);

var velociraptorToDinosaur = text.replace('Velociraptor' , 'Dinosaur');

console.log(velociraptorToDinosaur);

var halfOfText = triceratopsUpperCased.slice(0, triceratopsUpperCased.length/2);

console.log(halfOfText);

