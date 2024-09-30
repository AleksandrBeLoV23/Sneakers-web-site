/** MENU SHOW */
const showMenu = (toggleId, navid)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navid)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/** REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link'),
navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/** SCROLL SECTIONS ACTIVE LINK */
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionid = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionid +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionid +']').classList.remove('active')
        }
    })
}

/** CHANGE COLOR HEADER */
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}