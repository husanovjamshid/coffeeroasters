let cardBtn = document.querySelector('.coffee__choose')
let openBtn = document.querySelector('.open')
let closeBtn = document.querySelector('.coffee__choose-title')

closeBtn.addEventListener('click', function(){
    cardBtn.classList.toggle('open')
})