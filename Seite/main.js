const menuBtn = document.querySelector('.burger-menu');
let menuOpen = false;

function menuClick() {
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
    if (!event.target.matches('.burger-menu')) {
        if (menuOpen) {
            menuClick();
        }
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

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


var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function currentDiv(n) {
  showDivs3(slideIndex3 = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  

}





