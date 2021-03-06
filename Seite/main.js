//Burger-Menü-Funktion
let menuOpen = false;

function menuClick() {
    let menuBtn = document.querySelector('.burger-menu');
    if (menuBtn.classList.contains('open')) {
        document.getElementById("myDropdown").classList.remove("show-block");
        menuBtn.classList.remove('open');
        menuOpen = false;
    } else {
        document.getElementById("myDropdown").classList.add("show-block");
        menuBtn.classList.add('open');
        menuOpen = true;
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.burger-menu') && !event.target.matches('.burger-menu-lines')) {
        if (menuOpen) {
            menuClick();
        }
    }
}


//Produkt-Bilder-Karussell
var slideIndex0 = 1;
showDivs(slideIndex0);

var slideIndex1 = 1;
showText(slideIndex1);

function plusDivs(n) {
    showDivs(slideIndex0 += n);
    showText(slideIndex1 += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex0 = 1 }
    if (n < 1) { slideIndex0 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex0 - 1].style.display = "block";
}

function showText(n) {
    var i;
    var x = document.getElementsByClassName("product-overlay");
    if (n > x.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex1 - 1].style.display = "block";
}


//Lounge-Bilder-Karussell
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex2 - 1].style.display = "block";
}

//Behind The Beans Bilder-Karussell
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
}

function currentDiv(n) {
    showDivs3(slideIndex3 = n); // Funktion, der den Bild-Slide anzeigen lässt, der angeklickt wird (CurrentDiv(1/2/3))
    showSlides(slideIndex4 = n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex3 - 1].style.display = "block";
}

var slideIndex4 = 1;
showSlides(slideIndex4);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("text-behind-the-beans");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " active";
}

// Fade In Effekt
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var result = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= 300 + (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    return result;
}

function callbackFunc() {
    setVisible(document.querySelectorAll(".call-to-action"));
    setVisible(document.querySelectorAll(".testimonial"));
    setVisible(document.querySelectorAll(".services"));
    setVisible(document.querySelectorAll(".behind-the-beans"));
    setVisible(document.querySelectorAll(".div1"));
    setVisible(document.querySelectorAll(".div2"));

}

function setVisible(elements) {
    for (var i = 0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add("visible");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
