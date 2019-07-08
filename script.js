//Language switcher
let langLink = document.querySelectorAll('.language__link');

langLink.forEach(function(elem){
  elem.addEventListener('click',function(e){
    langLink.forEach(el => el.classList.remove('link_selected'))
    e.target.classList.add('link_selected');
  })
})

//Menu
let menu = document.querySelector('.menu');
let openMenu = document.querySelector('.burger');
let closeMenu = document.querySelector('.menu__close')
openMenu.addEventListener('click',function(){
  menu.style.display = 'block';
})

closeMenu.addEventListener('click',function(){
  menu.style.display = 'none';
})

//resident
let residentButton = document.querySelector('.navigation__btn');
let residentPanel = document.querySelector('.resident-wrap');
let closeResident = document.querySelector('.resident__close');
residentButton.addEventListener('click',function(){
  residentPanel.style.display = 'block';
})

menu.addEventListener('click',function(e){
  if(e.target === menu){
    residentPanel.style.display = 'none';
  }
})

closeResident.addEventListener('click',function(){
  residentPanel.style.display = 'none';
})
