// javascript code to refresh the input field when reload or cut

window.onload = function () {
  document.getElementsByTagName('input').value = '';
}

// javascript code to minimize the nav-bar on scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    docemument.getElementById("header-nav").style.height = "3.4r";
    document.getElementById("logo").style.height = "6rem";

  } else {
    document.getElementById("header-nav").style.height = "3.8rem";
    document.getElementById("logo").style.height = "10rem";

  }
}

// javascript for opening and closing of hamburger menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

// javascript for contact with us button

function contactButton() {
  document.getElementById("contact-us-popup").style.display = "block";

}

// javascript for closing contact with us popup

function backfunc() {
  document.getElementById("contact-us-popup").style.display  = "none";
}

// javascript for opening thanks popup after submittion of query

function submitfunc() {
  document.getElementById("contact-us-popup").style.display = "none";

  document.getElementById("thanks-popup").style.display = "block";
}

// javascript for closing thanks popup

function browsefunc() {
  document.getElementById("thanks-popup").style.display = "none";
}