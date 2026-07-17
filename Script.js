const burgerbutton =document.getElementById('burgerBtn');
const navs = document.getElementById('navLists');
const wrongBtn=document.getElementById('wrongBtn');

burgerbutton.addEventListener('click',()=>{
    navs.classList.toggle('active');
    if(wrongBtn.classList.contains('fa-bars')){
        wrongBtn.classList.replace('fa-bars','fa-x');
    }
    else{
        wrongBtn.classList.replace('fa-x','fa-bars');
    }
})