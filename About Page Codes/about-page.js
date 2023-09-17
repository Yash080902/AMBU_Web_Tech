window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
  ) {
      document.getElementById("navbar").style.height = "3.4vw";
      document.getElementById("logo1").style.height = "3.8vw";
  } else {
      document.getElementById("navbar").style.height = "5vw";
      document.getElementById("logo1").style.height = "4.5vw";
  }
}

// to make ham menu responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// javascript for the typing animation 

let title = document.querySelector('.main_heading');
let index = 1;

const typeWriter = () => {
    let name = "Faster-Ontime-Reliable";
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;

    setTimeout(() => typeWriter(), 100)
}

typeWriter();

// javascript for the who we are typing animation

let text = document.querySelector('.who-we-are-text');
let new_index = 1;

const typeWriternew = () => {
    let name = "As a dedicated team of individuals who deeply care about your precious time and the well-being of your loved ones, we intimately understand the distress that ensues from the untimely response of hospitals and ambulances during critical junctures. Our mission revolves around reshaping the perception of medical facilities in India, replacing fear with assurance. We aim to imbue our fellow citizens with a renewed sense of security, trusting in a healthcare system that values both time and lives.";
    let new_text = name.slice(0,new_index);
    text.innerText = new_text;
   new_index++;

    setTimeout(() => typeWriternew(), 20)
}

typeWriternew();

// meet or team swipper slides
                        
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});  

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