var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    backdrop.classList.add("open");
    backdrop.style.display = "block";
    modal.classList.add("open");
  });
}

modalNoButton && modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", function () {
  closeModal();
  mobileNav.classList.remove("open");
});

function closeModal() {
  modal && modal.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  },200);//delay has to match at least the transition
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  },10);
});

ctaButton.addEventListener('animationstart', function(event){
  console.log('animation started', event)
})
ctaButton.addEventListener('animationend', function(event){
  console.log('animation ended', event)
})
ctaButton.addEventListener('animationiteration', function(event){
  console.log('animation iterated', event)
})