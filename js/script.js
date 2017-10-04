 var navMain = document.querySelector('.main-nav');
 var navToggle = document.querySelector('.main-nav__toggle');

 navMain.classList.remove('main-nav--nojs');

 navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  if(!navToggle.classList.contains("main-nav__toggle--close") &&  navMain.classList.contains("main-nav--close")){
    navMain.classList.remove("main-nav--close");
    navToggle.classList.add("main-nav__toggle--close");
  }
  else {
    navMain.classList.add("main-nav--close");
    navToggle.classList.remove("main-nav__toggle--close");
  }
})
