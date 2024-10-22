document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌓 Modo Escuro";
    darkModeToggle.classList.add("btn", "btn-dark", "dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            } else {
                entry.target.style.opacity = 0.5;
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});