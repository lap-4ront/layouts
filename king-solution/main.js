import "@fontsource/inter";
import "./style.css";

const FORM = document.querySelector("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
});

const OVERLAY = document.querySelector(".overlay");
const CONTACT_BTN = document.querySelector(".contact-btn");
const GET_STARTED_BTN = document.querySelector(".header__cta-btn");
const CONTACT_MODAL = document.querySelector(".contact-modal");

GET_STARTED_BTN.addEventListener("click", (event) => {
  CONTACT_MODAL.style.display = "block";
  OVERLAY.style.display = "block";
});

document.addEventListener("click", (event) => {
  const GETINTOUCH_MODAL = document.querySelector(".getintouch-modal");
  if (event.target.classList.contains("contact-btn")) {
    OVERLAY.style.display = "block";
    GETINTOUCH_MODAL.style.display = "flex";
    GETINTOUCH_MODAL.classList.toggle("show");
    CONTACT_MODAL.style.display = "none";
  }

  if (
    event.target.classList.contains("modal__close") ||
    event.target.classList.contains("overlay")
  ) {
    OVERLAY.style.display = "none";
    GETINTOUCH_MODAL.style.display = "none";
    GETINTOUCH_MODAL.classList.toggle("show");
  }
});
