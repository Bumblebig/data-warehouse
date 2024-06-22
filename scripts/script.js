// ELEMENTS SELECTION
const helpButton = document.querySelector(".help-button");
const featuresButton = document.querySelector(".features-button");
const signupButton = document.querySelector(".signup-button");
const mobileHelp = document.querySelector(".mobile-help");
const mobilefeatures = document.querySelector(".mobile-features");
const mobileSignup = document.querySelector(".mobile-sign-up");

const help = document.querySelector(".help");
const features = document.querySelector(".features");
const signupCTA = document.querySelector(".cta");

// MOBILE NAVS
const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cancel");
const mobileNavs = document.querySelector(".mobile-nav-menus");
const bg = document.querySelector(".click-bg");
const allLinks = document.querySelectorAll(".mobile-header-nav");

// Scroll to section
const sectionScroll = function (section) {
  section.scrollIntoView({ behavior: "smooth" });
};

// Click to scroll event listener for buttons
const scroll = function (element, location) {
  element.addEventListener("click", function () {
    sectionScroll(location);
  });
};

const scrollEvent = function () {
  scroll(helpButton, help);
  scroll(featuresButton, features);
  scroll(signupButton, signupCTA);

  scroll(mobileHelp, help);
  scroll(mobilefeatures, features);
  scroll(mobileSignup, signupCTA);
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
  // Arrow prompt depending on the element number
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

// Centers a particular slide element
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      // add visibility to current element
      slide.classList.remove("overflowing");
      slide.querySelector(".layover").classList.add("hidden");
    } else {
      //retrict visibility on every other element apart from current
      slide.classList.add("overflowing");
      slide.querySelector(".layover").classList.remove("hidden");
    }

    // Move slides
    slide.style.transform = `translateX(${(i - index) * 670}px)`;
  });

  //   make respective dots active with respect to current slide
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-active", i === index);
  });

  updateArrows();
}

// Slide movement by arrows
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

// Move slide by dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

// MOBILE NAVS
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

// Toggle off mobile nav if swindow greater than 500px
window.addEventListener("resize", function () {
  if (window.innerWidth >= 860) {
    mobileNavs.classList.add("hidden");
    bg.classList.add("hidden");
  }
});
