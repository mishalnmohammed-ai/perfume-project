/*Scrolling perfection*/

// let prevScrollPos = window.pageYOffset;
// window.onscroll = () => {
//   let currentScrollPos = window.pageYOffset;
//   prevScrollPos < currentScrollPos
//     ? document.querySelector("nav").classList.add("hide")
//     : document.querySelector("nav").classList.remove("hide");
//   prevScrollPos = currentScrollPos;
// };

/*For Responsive*/
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click()
});
