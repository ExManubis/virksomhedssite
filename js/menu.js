// CONSTANTS
const path = document.querySelector(".menu_path");
const menuIcon = document.querySelector(".menu_icon");
const menuLinks = document.querySelector(".menu_links");

// VARIABLES
let toggle = false;

let y = 100;
let c = 100;

// FUNCTIONS
function linearInterpol(start, end, time) {
  return start * (1 - time) + end * time;
}

function animate() {
  if (toggle) {
    y = linearInterpol(y, 0, 0.045).toFixed(2);
    c = linearInterpol(c, 0, 0.065).toFixed(2);
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
  } else {
    y = linearInterpol(y, 100, 0.065).toFixed(2);
    c = linearInterpol(c, 100, 0.085).toFixed(2);
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
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
