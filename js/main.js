let cardBtn = document.querySelector('.coffee__choose')
let cardBtn2 = document.querySelector('.coffee__choose-two')
let cardBtn3 = document.querySelector('.coffee__choose-three')
let cardBtn4 = document.querySelector('.coffee__choose-four')
let cardBtn5 = document.querySelector('.coffee__choose-five')
let openBtn = document.querySelector('.open')
let closeBtn = document.querySelector('.coffee__choose-title')
let closeBtn2 = document.querySelector('.coffee__choose-title-two')
let closeBtn3 = document.querySelector('.coffee__choose-title-three')
let closeBtn4 = document.querySelector('.coffee__choose-title-four')
let closeBtn5 = document.querySelector('.coffee__choose-title-five')

closeBtn.addEventListener('click', function(){
    cardBtn.classList.toggle('open')
})

closeBtn2.addEventListener('click', function(){
    cardBtn2.classList.toggle('open')
})

closeBtn3.addEventListener('click', function(){
    cardBtn3.classList.toggle('open')
})

closeBtn4.addEventListener('click', function(){
    cardBtn4.classList.toggle('open')
})

closeBtn5.addEventListener('click', function(){
    cardBtn5.classList.toggle('open')
})