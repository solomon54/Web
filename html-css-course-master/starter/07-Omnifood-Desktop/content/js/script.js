
let year = document.querySelector('.year');
let currentYear = new Date().getFullYear();
console.log(year);
year.textContent = currentYear;

// document.querySelector('h1').style.backgroundColor = 'red';

// Make mobile navigation work
let navEl=document.querySelector('.mob--nav-open');
let navElclose=document.querySelector('.mob--nav-close');
let headerEl=document.querySelector('.header');

navEl.addEventListener('click',function(){
    headerEl.classList.add('nav--open');
});
navElclose.addEventListener('click',function(){
    headerEl.classList.remove('nav--open');
});

