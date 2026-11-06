const menu = `
<header class="menu-header">

    <nav class="menu-navbar">

        <a href="index.html" class="menu-logo">
            <img src="../../assets/img/Logo Ambrozini sem fundo.png" alt="Ambrozini">
        </a>

        <button class="menu-mobile-button" id="menu-mobile-button">
            ☰
        </button>

        <ul class="menu-links" id="menu-links">

            <li class="menu-item">
                <a href="index.html" class="menu-link">Home</a>
            </li>

            <li class="menu-item">
                <a href="eventos.html" class="menu-link">Eventos</a>
            </li>

            <li class="menu-item">
                <a href="pedro.html" class="menu-link">Pedro Ambrozini</a>
            </li>

            <li class="menu-item">
                <a href="contato.html" class="menu-link">Contato</a>
            </li>

        </ul>

    </nav>

</header>
`;

document.body.insertAdjacentHTML("afterbegin", menu);

const menuButton = document.getElementById("menu-mobile-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("menu-open");
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-link").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("menu-link-active");
    }
});