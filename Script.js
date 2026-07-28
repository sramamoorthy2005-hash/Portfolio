const burgerbutton =document.getElementById('burgerBtn');
const navs = document.getElementById('navLists');
const wrongBtn=document.getElementById('wrongBtn');
const navLinks =document.querySelectorAll('.navList');
const pages =document.querySelectorAll('#home,#about,#skill,#project,#achivement,#contact');


burgerbutton.addEventListener('click',()=>{
    navs.classList.toggle('active');
    if(wrongBtn.classList.contains('fa-bars')){
        wrongBtn.classList.replace('fa-bars','fa-x');
    }
    else{
        wrongBtn.classList.replace('fa-x','fa-bars');
    }
})

window.addEventListener('scroll',()=>{
    let current='home';
    pages.forEach((page)=>{
        const pageTop =page.offsetTop-120;
        const pageHeight=page.clientHeight;
        if(window.scrollY>=pageTop&&window.scrollY<pageTop+pageHeight){
            current = page.id;
        }
    });
    navLinks.forEach((navLink)=>{
        navLink.classList.remove('active');
        if(navLink.getAttribute('href')=='#'+current){
            navLink.classList.add('active');
        }
    });
})