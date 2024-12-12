// CONSTANTS
const path = document.querySelector(".menu_path");
const menuIcon = document.querySelector(".menu_icon");
const menuLinks = document.querySelector(".menu_links");
const form = document.querySelector(".email_form");
const trans = document.querySelector(".menu_transition");
const wrapper = document.querySelector(".menu_wrapper");

// VARIABLES
let toggle = false;

let y = 100; // y-axis
let c = 100; // curve

// FUNCTIONS
function linearInterpol(start, end, time) {
  return start * (1 - time) + end * time;
}

function animate() {
  if (toggle) {
    y = linearInterpol(y, 0, 0.035).toFixed(2);
    c = linearInterpol(c, 0, 0.065).toFixed(2);
    trans.classList.add("active");
    wrapper.classList.add("active");
    path.setAttribute("stroke-width", "5px");
    path.setAttribute("fill", "#701C1B");
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
  } else {
    y = linearInterpol(y, 105, 0.025).toFixed(2);
    c = linearInterpol(c, 105, 0.045).toFixed(2);
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
    path.setAttribute("stroke-width", "0px");
    setTimeout(() => {
      path.setAttribute("fill", "#F8CDC4");
      trans.classList.remove("active");
      wrapper.classList.remove("active");
    }, 2000);
  }

  requestAnimationFrame(animate);
}

// EVENTLISTENERS
menuIcon.addEventListener("click", () => {
  setTimeout(() => {
    toggle = !toggle;
  }, 300);

  if (toggle) {
    menuLinks.classList.remove("active");
  } else {
    setTimeout(() => {
      menuLinks.classList.add("active");
    }, 1000);
  }
  menuIcon.classList.toggle("active");
});

// SCRIPT
animate();
