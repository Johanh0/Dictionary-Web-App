const html = document.querySelector("html");
const toggleBtn = document.querySelector(".toggle-btn");
const selectDropdown = document.querySelector("#select-dropdown");

// console.log(selectDropdown.selectedIndex);

function localStorageFontFamily() {
  if (localStorage.getItem("font-family")) {
    const fontFamily = parseInt(localStorage.getItem("font-family"));
    switch (fontFamily) {
      case 0:
        html.style.setProperty("--font-family", `"Inter", sans-serif`);
        break;
      case 1:
        html.style.setProperty("--font-family", `"Lora", serif`);
        break;
      case 2:
        html.style.setProperty("--font-family", `"Inconsolata", monospace`);
        break;
    }
  }
}

function isUserDarkMode() {
  const isDarkModeSave = localStorage.getItem("darkmode");
  if (isDarkModeSave === "light") {
    html.dataset.darkmode = "light";
    toggleBtn.style.transform = "translateX(0px)";
    return;
  } else if (isDarkModeSave === "dark") {
    html.dataset.darkmode = "dark";
    toggleBtn.style.transform = "translateX(24px)";
    return;
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    html.dataset.darkmode = "light";
    toggleBtn.style.transform = "translateX(0px)";
    return;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.dataset.darkmode = "dark";
    toggleBtn.style.transform = "translateX(24px)";
    return;
  }
}

function toggleDarkMode() {
  if (html.dataset.darkmode === "light") {
    html.dataset.darkmode = "dark";
    toggleBtn.style.transform = "translateX(24px)";
    localStorage.setItem("darkmode", "dark");
  } else if (html.dataset.darkmode === "dark") {
    html.dataset.darkmode = "light";
    toggleBtn.style.transform = "translateX(0px)";
    localStorage.setItem("darkmode", "light");
  }
}

function changeFontFamily() {
  switch (selectDropdown.selectedIndex) {
    case 0:
      html.style.setProperty("--font-family", `"Inter", sans-serif`);
      break;
    case 1:
      html.style.setProperty("--font-family", `"Lora", serif`);
      break;
    case 2:
      html.style.setProperty("--font-family", `"Inconsolata", monospace`);
      break;
  }

  localStorage.setItem("font-family", selectDropdown.selectedIndex);
}

window.addEventListener("load", () => {
  isUserDarkMode();
  localStorageFontFamily();

  toggleBtn.addEventListener("click", toggleDarkMode);
  selectDropdown.addEventListener("change", changeFontFamily);
});
