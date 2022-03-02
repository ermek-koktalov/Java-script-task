const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("menu-show");
});
