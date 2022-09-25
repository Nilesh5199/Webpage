burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
vclass = document.querySelector('.v-class')


burger.addEventListener('click', ()=>{
    vclass.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
