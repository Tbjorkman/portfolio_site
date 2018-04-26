let about_modal = document.querySelector('#about_modal');
let open = document.querySelector('#open_modal');
let close = document.querySelector('#close_modal');

function open_btn()
{
  console.log('open');
  about_modal.classList.remove('hidden');
  about_modal.classList.remove('animated', 'forwards', 'zoomOut');
  about_modal.classList.add('animated', 'forwards', 'zoomIn');
}
open.addEventListener('click', open_btn);

function close_btn()
{
  about_modal.classList.remove('animated', 'forwards', 'zoomIn');
  about_modal.classList.add('animated', 'forwards', 'zoomOut');
  setTimeout(function(){ about_modal.classList.add('hidden'); }, 500);
}

close.addEventListener('click', close_btn);

/* */

let Layer_2 = document.querySelector('#Layer_2');
let middle = document.querySelector('#middle');
let topOne = document.querySelector('#top');
let bottom = document.querySelector('#bottom');
let slideOutList = document.querySelectorAll('li');


Layer_2.addEventListener('click', burgerSwitch);

function burgerSwitch() {

  console.log('burger menu switches to X');
  topOne.classList.toggle('t_line');
  middle.classList.toggle('lines');
  bottom.classList.toggle('b_line');
  slideOutList.forEach(function(el, i){
    el.classList.toggle('slideDown');
  });
}
