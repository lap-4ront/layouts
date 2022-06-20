import "@fontsource/inter";
import "./style.css";

const FORM = document.querySelector("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
});

const CONTACT_BTN = document.querySelector(".contact-btn");
document.addEventListener("click", (event) => {
  // console.log(event.target.classList.contains("contact-btn"));
  const GETINTOUCH_MODAL = document.querySelector(".getintouch-modal");
  const OVERLAY = document.querySelector(".overlay");
  if (event.target.classList.contains("contact-btn")) {
    OVERLAY.style.display = "block";
    GETINTOUCH_MODAL.style.display = "flex";
    GETINTOUCH_MODAL.classList.toggle("show");
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
