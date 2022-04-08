const YEAR = document.querySelector("#year");
YEAR.innerHTML = new Date().getFullYear();

// Init scrollspy
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#main-nav"
});
