var body = document.getElementById('body');
var btn = document.getElementById('style-btn');
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
btn.onclick =  function(){
    body.classList.toggle('body2');
    moon.classList.toggle('display-none');
    sun.classList.toggle('display-block');
}
