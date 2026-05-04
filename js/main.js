document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuIcon = mobileMenuButton?.querySelector(".material-symbols-outlined");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("nav-link-active"));
            link.classList.add("nav-link-active");

            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
                mobileMenuButton?.setAttribute("aria-expanded", "false");
                if (mobileMenuIcon) {
                    mobileMenuIcon.textContent = "menu";
                }
            }
        });
    });

    mobileMenuButton?.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");

        if (isHidden) {
            mobileMenu.classList.remove("hidden");
            mobileMenuButton.setAttribute("aria-expanded", "true");
            if (mobileMenuIcon) {
                mobileMenuIcon.textContent = "close";
            }
        } else {
            mobileMenu.classList.add("hidden");
            mobileMenuButton.setAttribute("aria-expanded", "false");
            if (mobileMenuIcon) {
                mobileMenuIcon.textContent = "menu";
            }
        }
    });
});