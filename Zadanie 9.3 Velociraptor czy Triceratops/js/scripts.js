// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var velociraptorToDinosaur = text.replace('Velociraptor' , dinosaurUpperCased);

console.log(velociraptorToDinosaur);

var halfOfText = velociraptorToDinosaur.slice(0, velociraptorToDinosaur.length/2);

console.log(halfOfText);

