function addEventListener (param) {
    console.log(param);
}
var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(){
    var element = document.createElement('li');
    var numberOfItems = document.getElementsByTagName('li').length;
    element.innerHTML = 'item ' + numberOfItems;   
    list.appendChild(element);
});
