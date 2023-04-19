var isScrolling = false;

// For use on element that activates menu ONLY

function toggleMenu(){
    // console.log(isScrolling);    
    if(isScrolling){
        // console.log(isScrolling);

        window.scrollTo(0, 0);
        // console.log(window.scrollY);
   
    }
    menu = document.getElementById('sideMenu');
    if(menu.style.display == 'grid'){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'grid';
    }
}

// For use on body tag or other all-encompassing tag. 
// Not for use on element that activates menu
function hideMenu(){
    menu = document.getElementById('sideMenu');
    if(menu.style.display == 'grid'){
        menu.style.display = 'none';
    }
}


function infoReveal(idx){
    cover = document.getElementsByClassName('cover')[idx];
    content = document.getElementsByClassName('content')[idx];
    // cover.style.display = 'none'; 
    cover.style.animation = "fadeOut 1s ease-in forwards"
    // content.style.opacity = '1';
    content.style.animation = "textOpacityUp 1s ease-in forwards"
}
function infoHide(idx){
    cover = document.getElementsByClassName('cover')[idx];
    content = document.getElementsByClassName('content')[idx];
    cover.style.animation = "fadeIn 1s ease-in forwards"
    // cover.style.display = 'flex'; 
    // content.style.opacity = '0.1';
    content.style.animation = "textOpacityReset 1s ease-in forwards"
}


function togglePopup(popup_type) {
    document.getElementById(popup_type).classList.toggle("active");
}



window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        isScrolling = true;

        document.getElementById("nav").style.backgroundColor = "black";
        document.getElementById("nav").style.transition = "500ms all ease-in-out";

        
        // document.getElementById("lNav").dataset.scroll = "true";
        document.getElementById("cNav").dataset.scroll = "true";
        // document.getElementById("rNav").dataset.scroll = "true";
        // document.getElementById("navlink4").dataset.scroll = "true";
        // document.getElementById("contactButton").dataset.scroll = "true";
    }
    else {
        isScrolling = false;
        document.getElementById("nav").style.backgroundColor = "unset";
        document.getElementById("cNav").dataset.scroll = "false";
        // delete document.getElementById("contactButton").dataset.scroll
        // delete document.getElementById("lNav").dataset.scroll;
        // delete document.getElementById("cNav").dataset.scroll
        // delete document.getElementById("rNav").dataset.scroll;
        // delete document.getElementById("navlink4").dataset.scroll;
    }

})