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
