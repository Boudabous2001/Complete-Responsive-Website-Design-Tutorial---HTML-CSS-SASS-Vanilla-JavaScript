// Sélection d'un seul élément pour le menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Gestion du clic sur le bouton menu
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Réinitialiser l'état du menu et de la navbar lors du défilement
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Sélection correcte pour l'alternance entre mois et année
let yearBtn = document.querySelector('.pricing .price-toggler .year');
let monthBtn = document.querySelector('.pricing .price-toggler .month');
let yearAmount = document.querySelectorAll('.pricing .box .price .year');
let monthAmount = document.querySelectorAll('.pricing .box .price .month');

yearBtn.onclick = () => {
    yearBtn.classList.add('active');
    monthBtn.classList.remove('active');
    yearAmount.forEach(year => {
        year.style.display = 'block';
    });
    monthAmount.forEach(month => {
        month.style.display = 'none';
    });
};

monthBtn.onclick = () => {
    monthBtn.classList.add('active');
    yearBtn.classList.remove('active');
    monthAmount.forEach(month => {
        month.style.display = 'block';
    });
    yearAmount.forEach(year => {
        year.style.display = 'none';
    });
};

let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1 ) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length ) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.faq .accordation-container .accordation').forEach(accordation =>{
    accordation.onclick = ()=>{
        accordation.classList.toggle('active');
    }
})