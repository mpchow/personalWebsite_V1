window.addEventListener('load', ()=> {
    let mainPage = document.getElementById("mainPage");
    mainPage.style.opacity = 1;
    window.setTimeout( disableLoader, 2000); 
});

function disableLoader() {
    let loader = document.getElementById('loader').style;
    loader.opacity = 1;

     (function fadeOut(){(loader.opacity-=.1)<0?loader.display="none":setTimeout(fadeOut,40)})();

}

function scrollToAbout() {
    let element = document.getElementById("intro");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}

function scrollToProjects() {
    let element = document.getElementById("projectsTitle");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}

function scrollToContact() {
    let element = document.getElementById("contact");
    element.scrollIntoView({behavior: "smooth"});
    return false;
}
