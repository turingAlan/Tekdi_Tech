const navigation = document.getElementsByClassName("navigation")
const nav = document.getElementById('nav-container');
const logo = document.getElementById('logo');
const logoBlack = document.getElementById('logo-black');
const navClicks = document.getElementsByClassName("nav-click")
const navClickArray = Array.from(navClicks)
window.onscroll = function () { 
    if (window.scrollY >= 30 ) {
        nav.classList.add("scrolled")
        navigation[0].classList.add("nav-colored");
        navigation[0].classList.remove("nav-transparent");
        logoBlack.classList.add("visible");
        logoBlack.classList.remove("hidden");
        logo.classList.add("hidden");
        logo.classList.remove("visible");
        navClicks[1].classList.add("nav-click-black");
       const temp = ["helle",'bye']
        navClickArray.forEach(navclick => {
            navclick.classList.add("nav-click-black");
            navclick.classList.remove("nav-click-white");
            
        });
    } 
    else {
        navigation[0].classList.add("nav-transparent");
        navigation[0].classList.remove("nav-colored");
        nav.classList.remove("scrolled");
        logo.classList.add("visible");
        logo.classList.remove("hidden");
        logoBlack.classList.add("hidden");
        logoBlack.classList.remove("visible");
        navClickArray.forEach(navclick => {
            navclick.classList.add("nav-click-white");
            navclick.classList.remove("nav-click-black");
            
        });
    }
};