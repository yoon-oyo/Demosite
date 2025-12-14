/* ===== script.js ===== */
const ham = document.getElementById("hamburger");
const nav = document.getElementById("mobile-nav");


ham.addEventListener("click", () => {
nav.style.display = nav.style.display === "block" ? "none" : "block";
});