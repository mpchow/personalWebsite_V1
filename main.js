window.addEventListener('load', ()=> {
    let mainPage = document.getElementById("mainPage");
    mainPage.style.opacity = 1;
    let mainTitle = document.getElementById('name').style;
    mainTitle.opacity = 0;
    window.setTimeout( disableLoader, 2000); 
    window.setTimeout(fadeInTitle, 2500);
    window.setTimeout(fadeLinksIn, 2600);
});

function fadeLinksIn() {

    
}

function fadeInTitle () {
    let mainTitle = document.getElementById('name').style;
    mainTitle.opacity = 0;
    let opacity = 0;
    fadeNameIn();

    function fadeNameIn() {
        mainTitle.opacity = opacity;
        opacity += 0.1;
        if(mainTitle.opacity > 1) {
            mainTitle.display = "flex";
        }
        else {
            setTimeout(fadeNameIn, 40);
        }
    }
}



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
