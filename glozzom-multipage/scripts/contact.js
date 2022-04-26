import "@fontsource/dosis";
import "bootstrap";
import "./../styles/main.css";

// Generate the actual date
const YEAR = document.querySelector("#year");
YEAR.innerHTML = new Date().getFullYear();
