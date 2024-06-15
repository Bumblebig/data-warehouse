// ELEMENTS SELECTION
const helpButton = document.querySelector(".help-button");
const featuresButton = document.querySelector(".features-button");
const signupButton = document.querySelector(".signup-button");

const help = document.querySelector(".help");
const features = document.querySelector(".features");
const signupCTA = document.querySelector(".cta");

// Scroll to section
const sectionScroll = function (section) {
  section.scrollIntoView({ behavior: "smooth" });
};

const scrollEvent = function () {
  helpButton.addEventListener("click", function () {
    sectionScroll(help);
  });

  featuresButton.addEventListener("click", function () {
    sectionScroll(features);
  });

  signupButton.addEventListener("click", function () {
    sectionScroll(signupCTA);
  });
};
scrollEvent();

// SLIDER
const slides = document.querySelectorAll(".comments");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".left-arr");
const rightArrow = document.querySelector(".right-arr");
const rotatedLeft = document.querySelector(".rot-left");
const rotatedRight = document.querySelector(".rot-right");
let currentSlide = 0;

function updateArrows() {
  if (currentSlide === 0) {
    leftArrow.classList.add("hidden");
    rightArrow.classList.add("hidden");
    rotatedLeft.classList.remove("hidden");
    rotatedRight.classList.remove("hidden");
  } else {
    leftArrow.classList.remove("hidden");
    rightArrow.classList.remove("hidden");
    rotatedLeft.classList.add("hidden");
    rotatedRight.classList.add("hidden");
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("overflowing");
      slide.querySelector(".layover").classList.add("hidden");
    } else {
      slide.classList.add("overflowing");
      slide.querySelector(".layover").classList.remove("hidden");
    }
    slide.style.transform = `translateX(${(i - index) * 670}px)`;
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-active", i === index);
  });

  updateArrows();
}

leftArrow.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    showSlide(currentSlide);
  }
});

rotatedLeft.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    showSlide(currentSlide);
  }
});

rightArrow.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide += 1;
    showSlide(currentSlide);
  }
});

rotatedRight.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide += 1;
    showSlide(currentSlide);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

// MOBILE NAVS
const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cancel");
const mobileNavs = document.querySelector(".mobile-nav-menus");
const bg = document.querySelector(".click-bg");
const allLinks = document.querySelectorAll(".mobile-header-nav");

hamburger.addEventListener("click", function () {
  mobileNavs.classList.remove("hidden");
  bg.classList.remove("hidden");
});

cancel.addEventListener("click", function () {
  mobileNavs.classList.add("hidden");
  bg.classList.add("hidden");
});

bg.addEventListener("click", function () {
  mobileNavs.classList.add("hidden");
  bg.classList.add("hidden");
});

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNavs.classList.add("hidden");
    bg.classList.add("hidden");
  });
});
