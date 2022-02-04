const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

const changeTabFocus = (event) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (event.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (event.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
};

tabList.addEventListener("keydown", changeTabFocus);

const changeTabPanel = (event) => {
  const targetTab = event.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  mainContainer
    .querySelectorAll("picture")
    .forEach((picture) => picture.setAttribute("hidden", true));

  mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");
};

tabs.forEach((tab) => tab.addEventListener("click", changeTabPanel));
