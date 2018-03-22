var list = document.getElementById('list'),
    add = document.getElementById('addElem'),
    items = document.getElementsByTagName('li');

add.addEventListener('click', function(){
    var element = document.createElement('li');
    element.innerHTML = 'item ' + items.length;
    list.appendChild(element);
});
