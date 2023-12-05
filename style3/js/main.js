const hambergur = document.querySelector('.hambergur-menu');
const menu = document.querySelector('.menu');


hambergur.addEventListener('click', function(){
    menu.classList.toggle('activ')
})