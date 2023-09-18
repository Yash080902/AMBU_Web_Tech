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
  }s
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

// random quotes generator

// Array of quotes
const quotes = [
  { author: "Your health, our commitment." },
  { author: "Healthy citizens are the greatest asset any country can have." },
  { author: "Every single journey of your life starts with a healthy mind and a healthy journey." },
  { author: "Healthcare is not a job; it's a noble mission to save lives and improve well-being." },
  { author: "Healthcare is the heart of our community, and we're here to keep your heart healthy." },
  { author: "Every patient is a story waiting to be told, and we're here to help write the happiest chapter" },
  { author: "Your health is our priority, your well-being is our mission." },
  { author: "In the world of healthcare, every small act of kindness makes a big difference."},
  { author: "Together, we're building a healthier, happier tomorrow" }

  // Add more quotes as needed
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  // document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("quote-text").textContent = `- ${quote.author}`;
}

// Automatically generate new quotes every 10 seconds
setInterval(generateQuote, 2000);

// Generate initial quote
generateQuote();

// footer section javascript codes

document.querySelector(".contact-us-form").addEventListener("click", () => {
  document.querySelector(".form").style.display = "block";
  document.querySelector(".contact-us-form").style.display = "none";
});

document.querySelector(".submit").addEventListener("click", () => {
  document
      .querySelectorAll(".form-input")
      .forEach((input) => (input.value = ""));

  document.querySelector(".form").innerHTML = `
  <div class="form-item" data-animation="fadeOff">
    <div>
      <figure><img src="about-page-images/thanks-img.webp" alt="ambu logo" class="form-logo"></figure>
    </div>

    <div>
      <h1>Thank You</h1>
    </div>

    <div>
      <p class="form-para-1">Our team will get back
        to you shortly !
      </p>
    </div>



    <p class="form-para-2">Stay Tuned</p>

  </div>`;
  // document.querySelector(".form-dropdown").option.value = "Select";

  document.querySelector(".form").classList.add("fade1");
  document.querySelector(".form").classList.add("fadeOff");
  document.querySelector(".contact-us-form").style.display = "block";

  setInterval(() => {
      document.querySelector(".form").style.display = "none";
  }, 8000);
});
