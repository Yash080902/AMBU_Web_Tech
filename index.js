// Note - to see rotating image uncomment "rotating img trial" code

// to make navbar size change on scroll

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

// js to change content of types of ambulance detail box

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
        <figure><img src="/images/ambu logo.png" alt="ambu logo" class="form-logo"></figure>
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

// for Fade animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const animation = entry.target.getAttribute("data-animation");

        if (entry.isIntersecting) {
            entry.target.classList.add("animated", `${animation}`);
        } else {
            entry.target.classList.remove("animated", `${animation}`);
        }
    });
});

const animatedEls = document.querySelectorAll("[data-animation]");
animatedEls.forEach((el) => observer.observe(el));

// for sliding div animations

// I have tried this scrolling effect code but it cause some problem in responsiveness in smaller screens thats why i comment it out both in css and js. if you want to see it your self uncomment effect one by one in both css and js file

// starting Code for scrolling effect

// const observer1 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         } else {
//             entry.target.classList.remove("show");
//         }
//     });
// });

// const hiddenElement = document.querySelectorAll(".hidden");

// hiddenElement.forEach((el) => {
//     observer1.observe(el);
// });

// ending Code for scrolling effect
