document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("nav-link-active"));
            link.classList.add("nav-link-active");
        });
    });
});