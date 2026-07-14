const burgerbutton =document.getElementById('burgerBtn');
const navs = document.getElementById('navLists');

burgerbutton.addEventListener('click',()=>{
   console.log('click');
    navs.classList.toggle('active');
})