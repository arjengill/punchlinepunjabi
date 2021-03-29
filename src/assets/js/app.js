/* Slider */

var time = 5000;

let sliderImages = document.querySelectorAll(".slider"),
  arrowLeft = document.querySelector("#prev"),
  arrowRight = document.querySelector("#next"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

setInterval(function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  slideRight();
}, 7000);

arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  slideRight();
});

arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }

  slideLeft();
});

startSlide();

/* Dynamic nav bar */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 170 ||
    document.documentElement.scrollTop > 170
  ) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

if (window.location.href.match(/index/g)) {
  document.querySelector("#navbar").style.top = "-5vh";
}

function burgerBoiMenu() {
  var burgPopup = document.querySelector(".burger-menu-popup");
  var extBtn = document.querySelector(".burger-menu-exit-button");
  var pgContainer = document.querySelector("#page-container");
  var burgNav = document.querySelector(".burger-menu-nav-link-container");

  let menArr = [".slide-down-burger-menu", ".burger-menu"];

  menArr.forEach(function (elem) {
    document.querySelector(elem).addEventListener("click", function () {
      burgPopup.style.height = "100vh";
      burgNav.style.display = "block";
      extBtn.style.display = "block";
      pgContainer.style.display = "none";
    });
  });

  document
    .querySelector(".burger-menu-exit-button")
    .addEventListener("click", function () {
      burgPopup.style.height = "0vh";
      burgNav.style.display = "none";
      extBtn.style.display = "none";
      pgContainer.style.display = "block";
    });
}
burgerBoiMenu();
