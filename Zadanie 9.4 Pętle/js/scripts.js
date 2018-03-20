// scripts.js

function drawTree (height) {
    var i, j, k;
    for (i=0 ; i < height ; i++) {
        var star='';   
        for (j = height - 1 - i; j >= 0; j--) {
            star += ' ';
        }
        for (k = 1; k <= 2 * i + 1; k++) {
            star += '*';
        }
        console.log(star);
    }
}

drawTree(10);