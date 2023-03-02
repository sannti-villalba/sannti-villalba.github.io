// Nav hamburgerburger selecciones
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// seleccionar nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu función
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Cerrar el menú de hamburguesas cuando se hace clic en un enlace
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
// Desplazarse a la sección superior
const scrollUp = document.querySelector("#scroll-up");

// Desplazarse a la funcionalidad superior
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
