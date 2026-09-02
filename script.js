const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const slides = Array.from(document.querySelectorAll(".slide"));
const previousSlide = document.querySelector(".slide-prev");
const nextSlide = document.querySelector(".slide-next");
const slideDots = document.querySelector(".slide-dots");
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  Array.from(slideDots.children).forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

if (slides.length > 1 && previousSlide && nextSlide && slideDots) {
  slides.forEach((_, slideIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slide-dot";
    dot.setAttribute("aria-label", `Show photo ${slideIndex + 1}`);
    dot.addEventListener("click", () => showSlide(slideIndex));
    slideDots.appendChild(dot);
  });

  previousSlide.addEventListener("click", () => showSlide(currentSlide - 1));
  nextSlide.addEventListener("click", () => showSlide(currentSlide + 1));
  showSlide(0);
  setInterval(() => showSlide(currentSlide + 1), 5000);
} else if (slideDots) {
  slideDots.hidden = true;
  if (previousSlide) previousSlide.hidden = true;
  if (nextSlide) nextSlide.hidden = true;
}
