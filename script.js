/*==========================================
    PORTFOLIO JAVASCRIPT
==========================================*/

/*------------------------------------------
    DARK / LIGHT MODE
------------------------------------------*/

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/*------------------------------------------
    TYPING ANIMATION
------------------------------------------*/

new Typed(".typing",{

    strings:[

        "Software Developer",

        "Full Stack Developer",

        "Android Developer",

        "Problem Solver"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1500,

    loop:true

});


/*------------------------------------------
    AOS SCROLL ANIMATION
------------------------------------------*/

AOS.init({

    duration:1000,

    offset:120,

    easing:"ease-in-out",

    once:true

});


/*------------------------------------------
    SCROLL TO TOP BUTTON
------------------------------------------*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*------------------------------------------
    ACTIVE MENU LINK
------------------------------------------*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*------------------------------------------
    HEADER BACKGROUND ON SCROLL
------------------------------------------*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(15,23,42,.92)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(255,255,255,.15)";
        header.style.boxShadow="none";

    }

});