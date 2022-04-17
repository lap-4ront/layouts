import "./../styles/main.css";

const myCarousel = document.querySelector("#myCarousel");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 7000
});
