const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("hamburger-menu");
const counts = document.querySelectorAll(".counting");
const header = document.getElementById("header");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

document.onclick = function (e) {
  if (e.target.id == "overlay") {
    menu.classList.remove("show-menu");
    overlay.classList.remove("overlay-show");
    btn.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
};

//header scroll
var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      header.style.display = "none";
    } else {
      // upscroll code
      header.style.display = "flex";
      header.style.backgroundColor = "black";
      if (window.pageYOffset == 0) {
        header.style.backgroundColor = "transparent";
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counts.forEach((counting) => {
    counting.innerText = "0";

    const updateCount = () => {
      // Get count target
      const target = +counting.getAttribute("data-target");
      // Get current count value
      const c = +counting.innerText;

      // Create an increment
      const increment = target / 100;

      //If count is less than target, add increment
      if (c < target) {
        counting.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCount, 40);
      } else {
        counting.innerText = target;
      }
    };
    updateCount();
  });
}

function reset() {
  counts.forEach((counting) => (counting.innerHTML = "0"));
}

countUp();

var index = 0;
var lastSliderPrevBtn = document.getElementById("last-slider-prev-btn");
var lastSliderNextBtn = document.getElementById("last-slider-next-btn");
var lastSliderContainer = document.querySelector(".last-slider-container");
var lastSliderItems = document.querySelectorAll(".last-slider-item");
var lastSliderCounter = 1;
var lastSliderItemWidth = lastSliderItems[0].offsetWidth;
lastSliderContainer.style.transform = `translateX(${
  -1 * lastSliderCounter * lastSliderItemWidth
}px)`;

lastSliderNextBtn.onclick = function () {
  console.log(lastSliderCounter);
  if (lastSliderCounter >= lastSliderItems.length - 1) {
    return;
  }
  lastSliderContainer.style.transition = "transform 0.4s linear";
  lastSliderCounter++;
  lastSliderContainer.style.transform = `translateX(${
    -1 * lastSliderCounter * lastSliderItemWidth
  }px)`;
};
lastSliderPrevBtn.onclick = function () {
  if (lastSliderCounter <= 0) {
    return;
  }
  lastSliderContainer.style.transition = "transform 0.4s linear";
  lastSliderCounter--;
  lastSliderContainer.style.transform = `translateX(${
    -1 * lastSliderCounter * lastSliderItemWidth
  }px)`;
};
lastSliderContainer.ontransitionend = function () {
  if (lastSliderItems[lastSliderCounter].id === "lastClone") {
    lastSliderContainer.style.transition = "none";
    lastSliderCounter = lastSliderItems.length - 2;
    lastSliderContainer.style.transform = `translateX(${
      -1 * lastSliderCounter * lastSliderItemWidth
    }px)`;
  }
  if (lastSliderItems[lastSliderCounter].id === "firstClone") {
    lastSliderContainer.style.transition = "none";
    lastSliderCounter = lastSliderItems.length - lastSliderCounter;
    lastSliderContainer.style.transform = `translateX(${
      -1 * lastSliderCounter * lastSliderItemWidth
    }px)`;
  }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var myBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
myBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(function () {
  $(".close").click(function () {
    $("iframe").attr("src", $("iframe").attr("src"));
  });
});

var usesSlidePrevBtn = document.getElementById("uses-slide-prev-btn");
var usesSlideNextBtn = document.getElementById("uses-slide-next-btn");
var usesSlideContainer = document.querySelector(".uses-slide-container");
var usesSlideItems = document.querySelectorAll(".uses-slide-item");
var usesSlideCounter = 1;
var usesSlideItemWidth = usesSlideItems[0].offsetWidth;
usesSlideContainer.style.transform = `translateX(${
  -1 * usesSlideCounter * usesSlideItemWidth
}px)`;

usesSlideNextBtn.onclick = function () {
  console.log(usesSlideCounter);
  if (usesSlideCounter >= usesSlideItems.length - 1) {
    return;
  }
  usesSlideContainer.style.transition = "transform 0.4s linear";
  usesSlideCounter++;
  usesSlideContainer.style.transform = `translateX(${
    -1 * usesSlideCounter * usesSlideItemWidth
  }px)`;
};
usesSlidePrevBtn.onclick = function () {
  if (usesSlideCounter <= 0) {
    return;
  }
  usesSlideContainer.style.transition = "transform 0.4s linear";
  usesSlideCounter--;
  usesSlideContainer.style.transform = `translateX(${
    -1 * usesSlideCounter * usesSlideItemWidth
  }px)`;
};
usesSlideContainer.ontransitionend = function () {
  if (usesSlideItems[usesSlideCounter].id === "lastClone1") {
    usesSlideContainer.style.transition = "none";
    usesSlideCounter = usesSlideItems.length - 2;
    usesSlideContainer.style.transform = `translateX(${
      -1 * usesSlideCounter * usesSlideItemWidth
    }px)`;
  }
  if (usesSlideItems[usesSlideCounter].id === "firstClone1") {
    usesSlideContainer.style.transition = "none";
    usesSlideCounter = usesSlideItems.length - usesSlideCounter;
    usesSlideContainer.style.transform = `translateX(${
      -1 * usesSlideCounter * usesSlideItemWidth
    }px)`;
  }
};
