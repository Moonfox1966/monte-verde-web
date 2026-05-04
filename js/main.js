document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuIcon = mobileMenuButton?.querySelector(".material-symbols-outlined");

    const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const html = document.documentElement;

    function applyTheme(theme) {
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        updateThemeIcons(theme);
        localStorage.setItem("theme", theme);
    }

    function updateThemeIcons(theme) {
        const desktopIcon = themeToggleDesktop?.querySelector(".material-symbols-outlined");
        const mobileIcon = themeToggleMobile?.querySelector(".material-symbols-outlined");
        const mobileText = themeToggleMobile?.querySelector("span:last-child");

        if (theme === "dark") {
            if (desktopIcon) desktopIcon.textContent = "light_mode";
            if (mobileIcon) mobileIcon.textContent = "light_mode";
            if (mobileText) mobileText.textContent = "Modo claro";
        } else {
            if (desktopIcon) desktopIcon.textContent = "dark_mode";
            if (mobileIcon) mobileIcon.textContent = "dark_mode";
            if (mobileText) mobileText.textContent = "Modo oscuro";
        }
    }

    function toggleTheme() {
        const isDark = html.classList.contains("dark");
        applyTheme(isDark ? "light" : "dark");
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark ? "dark" : "light");
    }

    themeToggleDesktop?.addEventListener("click", toggleTheme);
    themeToggleMobile?.addEventListener("click", toggleTheme);

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