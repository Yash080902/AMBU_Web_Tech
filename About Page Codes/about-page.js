// javascript code to refresh the input field when reload or cut

window.onload = function () {
  document.getElementsByTagName('input').value = '';
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