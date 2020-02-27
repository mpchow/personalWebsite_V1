window.addEventListener('load', ()=> {
    let mainPage = document.getElementById("mainPage").style;
    let mainTitle = document.getElementById('name').style;
    let navAbout = document.getElementById('aboutNav').style;
    let navProjects = document.getElementById('projectsNav').style;
    let navContact  = document.getElementById('contactNav').style;

    mainPage.opacity = 1;
    mainTitle.opacity = 0;
    navAbout.opacity = 0;
    navProjects.opacity = 0;
    navContact.opacity = 0;

    window.setTimeout( disableLoader, 2000); 
    window.setTimeout(fadeInTitle, 2500);
    window.setTimeout(fadeAboutIn, 2800);
    window.setTimeout(fadeProjectIn, 3100);
    window.setTimeout(fadeContactIn, 3400);
});


function fadeContactIn () {
    let contactNav = document.getElementById('contactNav').style;
    contactNav.opacity = 0;
    let opacity = 0;
    fadeContact();

    function fadeContact() {
        contactNav.opacity = opacity;
        opacity += 0.1;
        if(contactNav.opacity > 1) {
            contactNav.opacity = 1;
        }
        else {
            setTimeout(fadeContact, 40);
        }
    }
}

function fadeProjectIn () {
    let projectNav = document.getElementById('projectsNav').style;
    projectNav.opacity = 0;
    let opacity = 0;
    fadeProject();

    function fadeProject() {
        projectNav.opacity = opacity;
        opacity += 0.1;
        if(projectNav.opacity > 1) {
            projectNav.opacity = 1;
        }
        else {
            setTimeout(fadeProject, 40);
        }
    }
}

function fadeAboutIn () {
    let aboutNav = document.getElementById('aboutNav').style;
    aboutNav.opacity = 0;
    let opacity = 0;
    fadeAbout();

    function fadeAbout() {
        aboutNav.opacity = opacity;
        opacity += 0.1;
        if(aboutNav.opacity > 1) {
            aboutNav.opacity = 1;
        }
        else {
            setTimeout(fadeAbout, 40);
        }
    }
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
