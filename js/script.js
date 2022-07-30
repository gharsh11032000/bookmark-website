const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs on click
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Menu on click
btn.addEventListener("click", menuToggle);

function onTabClick(e) {
  // Deactivating tabs border
  tabs.forEach((tab) => {
    tab.classList.remove("border-softRed", "border-b-4");
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  //   Hidding panel
  panels.forEach((panel) => panel.classList.add("hidden"));

  //   Activating tab
  e.target.classList.add("border-softRed", "border-b-4");

  //Activating panel
  const classString = e.target.getAttribute("data-target");

  const targetPanel = document
    .getElementById("panels")
    .getElementsByClassName(classString)[0];

  targetPanel.classList.remove("hidden");
  targetPanel.classList.add("flex");
}

function menuToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
