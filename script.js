const themeBtn = document.getElementById("themeBtn");
const message = document.getElementById("message");

function showMessage(text) {
    message.textContent = text;
    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 2500);
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
        showMessage("Dark mode enabled!");
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        showMessage("Light mode enabled!");
    }
});

const readMoreBtn = document.getElementById("readMoreBtn");
const moreInfo = document.getElementById("moreInfo");

readMoreBtn.addEventListener("click", function () {
    moreInfo.classList.toggle("hidden");

    if (moreInfo.classList.contains("hidden")) {
        readMoreBtn.textContent = "Read More";
    } else {
        readMoreBtn.textContent = "Show Less";
    }
});

document.getElementById("helloBtn").addEventListener("click", function () {
    showMessage("Hello! Thank you for visiting my portfolio.");
});

document.getElementById("year").textContent = new Date().getFullYear();

const hero = document.querySelector(".hero");
const slideNumber = document.getElementById("slideNumber");

const backgrounds = [
    "linear-gradient(90deg, rgba(53,35,25,.78), rgba(53,35,25,.18)), linear-gradient(120deg, #987052, #c7a88b, #e1cbb5)",
    "linear-gradient(90deg, rgba(53,35,25,.78), rgba(53,35,25,.18)), linear-gradient(120deg, #72503d, #b58c6d, #d7b99a)",
    "linear-gradient(90deg, rgba(53,35,25,.78), rgba(53,35,25,.18)), linear-gradient(120deg, #c9ad91, #96745b, #604737)"
];

let currentSlide = 0;

function changeSlide(index) {
    currentSlide = (index + backgrounds.length) % backgrounds.length;
    hero.style.backgroundImage = backgrounds[currentSlide];
    slideNumber.textContent = `${currentSlide + 1} / ${backgrounds.length}`;
}

document.getElementById("nextBtn").addEventListener("click", function () {
    changeSlide(currentSlide + 1);
});

document.getElementById("prevBtn").addEventListener("click", function () {
    changeSlide(currentSlide - 1);
});

setInterval(function () {
    changeSlide(currentSlide + 1);
}, 5000);