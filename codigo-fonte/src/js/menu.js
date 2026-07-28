const menuButton = document.getElementById("menu-mobile-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("menu-open");
});

const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".menu-link");

links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
        link.classList.add("menu-link-active");
    }
});