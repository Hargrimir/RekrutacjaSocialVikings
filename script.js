const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav_links");
const nav_button = document.querySelector(".nav_button");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_links.classList.toggle("active");
    nav_button.classList.toggle("active");
})

document.querySelectorAll(".nav_item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_links.classList.remove("active");
    nav_button.classList.remove("active");
}))
