var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var buyBtns = document.querySelectorAll(".buy-button");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  if(!navToggle.classList.contains("main-nav__toggle--close") &&  navMain.classList.contains("main-nav--close")) {
    navMain.classList.remove("main-nav--close");
    navToggle.classList.add("main-nav__toggle--close");
  } else {
    navMain.classList.add("main-nav--close");
    navToggle.classList.remove("main-nav__toggle--close");
  }
})

if(modal) {
  for(var i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener('click', function(event){
      event.preventDefault();
      overlay.classList.add("overlay--show");
      modal.classList.add("modal--show");
    });
  }

  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal--show");
  });

  modal.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  modalSubmit.addEventListener("submit", function() {
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal--show");
  });
}
