// scripts.js

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-5, 8);
var triangle3Area = getTriangleArea (12, -3);

function getTriangleArea(a, h) {
  if(a <= 0 || h <= 0) {
    return('wrong value');
  }
  return a * h / 2; 
}
    
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
