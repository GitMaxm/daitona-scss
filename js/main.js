function themeToggle() {
    const themeToggle = document.querySelector("#switch-theme");

    // 1. Проверка темной темы на уровне системных настроек
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.contains("light-theme")
            ? enableDarkMode(themeToggle)
            : enableLightMode(themeToggle);
    }

    function enableDarkMode(themeToggle) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        themeToggle.classList.remove("light-theme");
        themeToggle.classList.add("dark-theme");
        themeToggle.setAttribute("aria-label", "Переключить на светлую тему");
    }

    function enableLightMode(themeToggle) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themeToggle.classList.remove("dark-theme");
        themeToggle.classList.add("light-theme");
        themeToggle.setAttribute("aria-label", "Переключить на темную тему");
    }

    // 2. Проверка темной темы в localStorage
    if (localStorage.getItem('darkMode') === 'dark-theme') {
        themeToggle.classList.add("light-theme");
        document.body.classList.add("dark-theme");
    } else if (localStorage.getItem("darkMode") === "light") {
        themeToggle.classList.remove("light-theme");
        document.body.classList.remove("dark-theme");
    }

    // Если меняются системные настройки, меняем тему
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark-theme" : "light";

            if (newColorScheme === "dark-theme") {
                themeToggle.classList.add("light-theme");
                document.body.classList.add("dark-theme");
                localStorage.setItem("darkMode", "dark-theme");
                enableDarkMode(themeToggle);
            } else {
                themeToggle.classList.remove("light-theme");
                document.body.classList.remove("dark-theme");
                localStorage.setItem("darkMode", "light");
                enableLightMode(themeToggle);
            }
        });

    // Включение ночного режима по кнопке
    themeToggle.onclick = function () {
        themeToggle.classList.toggle("light-theme");
        const isDark = document.body.classList.toggle("dark-theme");

        if (isDark) {
            localStorage.setItem("darkMode", "dark-theme");
            enableDarkMode(themeToggle);
        } else {
            localStorage.setItem("darkMode", "light");
            enableLightMode(themeToggle);
        }
    };
}

themeToggle();