const swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  breakpoints: {
    //is >= 320px
    768: {
      slidesPerView: 3,
    },
    //is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
});

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    //is >= 320px
    768: {
      slidesPerView: 1,
    },
    //is >= 320px
    1024: {
      slidesPerView: 1,
    },
  },
});

// NavBar
const navBar = document.getElementById("navBar");
const hambuggerOpenIcon = document.getElementById("hambuggerOpenIcon");
const hambuggerCloseIcon = document.getElementById("hambuggerCloseIcon");
const nav__links = document.getElementById("nav__links");
let page = document.getElementById("body");

hambuggerOpenIcon.addEventListener("click", function () {
  hambuggerOpenIcon.style.display = "none";
  hambuggerCloseIcon.style.display = "flex";
  nav__links.style.right = "0%";
  nav__links.style.height = "100vh";
  nav__links.style.backgroundColor = "#E9E9E9";
  navBar.style.backgroundColor = "#E9E9E9";
  page.style.overflow = "hidden";
  screenSize();
});

hambuggerCloseIcon.addEventListener("click", function () {
  hambuggerCloseIcon.style.display = "none";
  hambuggerOpenIcon.style.display = "flex";
  nav__links.style.right = "100%";
  navBar.style.backgroundColor = "transparent";
  page.style.overflow = "scroll";
});

const scrollBg = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0.5) {
    navBar.style.backgroundColor = "#E9E9E9";
    navBar.style.boxShadow =
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
  }
};

document.addEventListener("scroll", scrollBg);

const screenSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    nav__links.style.backgroundColor = "transparent";
    page.style.overflow = "scroll";
  } else {
    nav__links.style.backgroundColor = "#E9E9E9";
  }
};

window.addEventListener("resize", screenSize);
