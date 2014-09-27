'use strict';

var fixBackground = function(){
    var backgroundImage = document.getElementById('page-background-img');
    if(window.innerHeight >= backgroundImage.height) {
        backgroundImage.style.height = '100%';
        backgroundImage.style.width = null;
    }
    if(window.innerWidth >= backgroundImage.width) {
        backgroundImage.style.width = '100%';
        backgroundImage.style.height = null;
    }
};
document.getElementById('page-background-img').ondragstart = function() { return false; };
window.onresize = fixBackground;
window.onload = fixBackground;