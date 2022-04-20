import "@fontsource/dosis";
import "bs5-lightbox";
import "./../styles/main.css";

// Generate the actual date
const YEAR = document.querySelector("#year");
YEAR.innerHTML = new Date().getFullYear();

const myCarousel = document.querySelector("#myCarousel");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 7000
});

// Playing video in the modal
const autoPlayYouTubeModal = () => {
  const triggerOpen = document.querySelector("[data-video]");

  triggerOpen.addEventListener("click", function () {
    let theModal = document.querySelector(this.dataset.bsTarget);
    let videoSRC = this.getAttribute("data-video");
    let videoSRCauto =
      videoSRC +
      "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";

    let theModalIframe = theModal.querySelector("iframe");
    theModalIframe.setAttribute("src", videoSRCauto);

    let theModalClose = theModal.querySelector("button.btn-close");

    theModalClose.addEventListener("click", () => {
      theModalIframe.setAttribute("src", videoSRC);
    });
  });
};

autoPlayYouTubeModal();
