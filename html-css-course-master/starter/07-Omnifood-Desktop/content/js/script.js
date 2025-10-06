
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


////////////////////////////////////////////////////////////////////
//////      Smooth scrolling animation    ///////////////////////////////
////////////////////////////////////////////////////////////////////
const allLinks=document.querySelectorAll('a:link');
allLinks.forEach(function (link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href=link.getAttribute('href');
        if(href==='#'){
            window.scrollTo({
                top:0,
                behavior: 'smooth'
            })
        }

        // scroll to other links
        if(href!=="#"&& href.startsWith('#')){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({behavior:'smooth'})
        }


        // close mobile navigation
        if(link.classList.contains('navigation--link'))
    headerEl.classList.toggle('nav--open');


    });
    
});