const html = document.querySelector("html");
const toggleBtn = document.querySelector(".toggle-btn");

function isUserDarkMode() {
  if (window.matchMedia("(prefers-color-scheme: ligth)").matches) {
    html.dataset.darkmode = "ligth";
    toggleBtn.style.transform = "translateX(0px)";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.dataset.darkmode = "dark";
    toggleBtn.style.transform = "translateX(24px)";
  }
}

function toggleDarkMode() {
  if (html.dataset.darkmode === "ligth") {
    html.dataset.darkmode = "dark";
    toggleBtn.style.transform = "translateX(24px)";
  } else if (html.dataset.darkmode === "dark") {
    html.dataset.darkmode = "ligth";
    toggleBtn.style.transform = "translateX(0px)";
  }
}

window.addEventListener("load", () => {
  isUserDarkMode();

  toggleBtn.addEventListener("click", toggleDarkMode);
});
