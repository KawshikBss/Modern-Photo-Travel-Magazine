document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navbar-toggle");
    const menu = document.querySelector(".menu");
    const menuBg = document.querySelector(".navbar");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuBg.classList.toggle("open");
    });
});
