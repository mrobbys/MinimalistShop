/*=============== AUTO SCROLL KE ATAS SAAT REFRESH ===============*/
// Nonaktifkan scroll restoration bawaan browser
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Scroll ke atas saat halaman di-refresh
window.onload = function () {
  if (
    document.body.scrollTop !== 0 ||
    document.documentElement.scrollTop !== 0
  ) {
    window.scrollTo(0, 0);
  }
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// tutup menu jika di scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navMenu.classList.remove("show-menu");
  }
});

// tutup menu jika klik di luar nav__menu
document.addEventListener("click", (e) => {
  const isClickInside =
    navMenu.contains(e.target) || navToggle.contains(e.target);

  if (!isClickInside) {
    navMenu.classList.remove("show-menu");
  }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 250
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  //   reset: true // animations repeat
});

sr.reveal(
  `.nav__logo, .cc__home__toggle, .contact__content > div:nth-child(1)`,
  {
    delay: 200,
    reset: false,
    origin: "left",
  }
);

// sr.reveal(`.nav__link`, { delay: 800, interval: 300 });
sr.reveal(`.nav__toggle, .contact__content > div:nth-child(2)`, {
  delay: 500,
  reset: false,
  origin: "right",
});

sr.reveal(
  `.home__title, .dua__title, .tiga__title, .empat__title, .section__title, .tujuh__title, .contact__data`
);
sr.reveal(`.dua__second__title`, {
  delay: 450,
  rotate: { y: -20 },
  distance: "30px",
});
sr.reveal(
  `.home__description, .dua__description, .tiga__description, .empat__description, .tiga__data span, .button, .footer__copy`,
  { delay: 600, origin: "bottom" }
);
sr.reveal(`.tiga__container img, .empat__container img`, {
  delay: 500,
  rotate: { z: 180 },
  distance: 0,
  scale: 0.25,
});

sr.reveal(`.womens__card, .mens__card`, {
  scale: 0.25,
  rotate: { z: 90 },
  distance: "left",
  delay: 700,
  interval: 300,
});

// Fungsi untuk mengatur ScrollReveal berdasarkan ukuran layar
const configureScrollReveal = () => {
  const screenWidth = window.innerWidth; // Mendapatkan lebar layar

  if (screenWidth > 768) {
    sr.reveal(`.nav__link`, { delay: 800, interval: 300, reset: false });
  }
};

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", configureScrollReveal);

// Panggil ulang fungsi setiap kali ukuran layar berubah
window.addEventListener("resize", configureScrollReveal);
