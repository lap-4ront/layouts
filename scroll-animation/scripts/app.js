window.addEventListener("scroll", (event) => {
  let row = document.querySelector(".row");
  let rowPosition = row.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.5;

  if (rowPosition < screenPosition) {
    row.classList.add("active");
  } else {
    row.classList.remove("active");
  }
});
