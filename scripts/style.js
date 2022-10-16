// style

document.addEventListener("DOMContentLoaded", () => {
    let contenu = document.getElementById("contenu");
    let dropdown_menu = document.getElementById("navbarNav");

    dimensionner_hauteur(contenu);

    dropdown_menu.addEventListener('shown.bs.collapse', () => {
        dimensionner_hauteur(contenu);
    });

    dropdown_menu.addEventListener('hidden.bs.collapse', () => {
        dimensionner_hauteur(contenu);
    });
});

function dimensionner_hauteur(contenu) {
    let navbar = document.getElementById("my-navbar");
    let navbar_height = navbar.clientHeight;

    contenu.style.height = "calc(100vh - " + navbar_height + "px)";
};
