document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    // Botão de alternância para o modo claro/escuro com armazenamento de preferência
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌓";
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.setAttribute("aria-label", "Alternar modo escuro");
    document.body.appendChild(darkModeToggle);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled);
    };

    darkModeToggle.addEventListener("click", toggleDarkMode);

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Função de manipulação para opacidade ao rolar a página
    const toggleOpacityOnScroll = (entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("fade-in", entry.isIntersecting);
        });
    };
    
    const observer = new IntersectionObserver(toggleOpacityOnScroll, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));
});