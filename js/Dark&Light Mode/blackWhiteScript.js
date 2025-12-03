const lightTheme = {
    bodyBg: "#ffffff",
    bodyText: "#111827",
    headerBg: "#f3f4f6",
    headerText: "#111827",
    sectionBg: "#ffffff",
    sectionText: "#111827",
    sectionBorder: "#d1d5db",
    footerBg: "#f3f4f6",
    footerText: "#111827",
    navLink: "#111827"
};

const darkTheme = {
    bodyBg: "#0f172a",
    bodyText: "#e5e7eb",
    headerBg: "#020617",
    headerText: "#e5e7eb",
    sectionBg: "#020617",
    sectionText: "#e5e7eb",
    sectionBorder: "#1f2937",
    footerBg: "#020617",
    footerText: "#e5e7eb",
    navLink: "#e5e7eb"
};

let currentMode = "light";

function applyTheme(theme) {
    document.body.style.backgroundColor = theme.bodyBg;
    document.body.style.color = theme.bodyText;

    const header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = theme.headerBg;
        header.style.color = theme.headerText;
        header.style.borderBottom = "1px solid " + theme.sectionBorder;
    }

    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        link.style.color = theme.navLink;
    });

    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.backgroundColor = theme.sectionBg;
        section.style.color = theme.sectionText;
        section.style.border = "1px solid " + theme.sectionBorder;
    });

    const footer = document.querySelector("footer");
    if (footer) {
        footer.style.backgroundColor = theme.footerBg;
        footer.style.color = theme.footerText;
        footer.style.borderTop = "1px solid " + theme.sectionBorder;
    }
}

function updateButtonText(button) {
    if (!button) return;
    if (currentMode === "light") {
        button.textContent = "Switch to Dark Mode";
    } else {
        button.textContent = "Switch to Light Mode";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");

    applyTheme(lightTheme);
    updateButtonText(toggleButton);

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (currentMode === "light") {
                currentMode = "dark";
                applyTheme(darkTheme);
            } else {
                currentMode = "light";
                applyTheme(lightTheme);
            }
            updateButtonText(toggleButton);
        });
    }
});