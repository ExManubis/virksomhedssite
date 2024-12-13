// CONSTANTS
const navbar = document.getElementById("navbar");

// VARIABLES
let pastScrollPosition = 0;

// EVENTLISTENERS
window.addEventListener("scroll", () => {
  let currentScrollPosition = scrollY;
  console.log(currentScrollPosition);
  if (
    currentScrollPosition > pastScrollPosition &&
    currentScrollPosition > 150
  ) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }
  return (pastScrollPosition = scrollY);
});
