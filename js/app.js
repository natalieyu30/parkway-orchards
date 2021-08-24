// navbar
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav");
const menuLink = document.querySelectorAll(".menu-link");
menu.addEventListener("click", () => {
  if (navMenu.classList.contains("show-nav")) {
    navMenu.classList.remove("show-nav");
  } else {
    navMenu.classList.add("show-nav");
  }
});

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-nav");
  });
});

// navbar background color
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => handleScroll());

const handleScroll = () => {
  if (window.pageYOffset > 200) {
    navbar.classList.add("with-bg");
  } else {
    navbar.classList.remove("with-bg");
  }
};

// FAQ
// const faqCards = document.querySelectorAll(".faq-card");
const faqIconsShows = document.querySelectorAll(".faq-show");
const faqIconsHides = document.querySelectorAll(".faq-hide");

faqIconsShows.forEach((icon) => {
  icon.addEventListener("click", () => showCard(icon));
});

faqIconsHides.forEach((icon) => {
  icon.addEventListener("click", () => hideCard(icon));
});

const showCard = (element) => {
  element.parentElement.parentElement.classList.add("show-card");
};
const hideCard = (element) => {
  element.parentElement.parentElement.classList.remove("show-card");
};

// gallery
const modalOpens = document.querySelectorAll(".modal-open");
const modalCloses = document.querySelectorAll(".modal-close");
const modals = document.querySelectorAll("#my-modal");

modalOpens.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.style.display = "block";
  });
});

modalCloses.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.style.display = "none";
  });
});

modals.forEach((modal) => {
  // console.log(modal);
  window.onclick = function (e) {
    if (e.target.id === "my-modal") {
      e.target.style.display = "none";
    }
    // if (e.target === item) {
    //   item.style.display = "none";
    // }
  };
});
