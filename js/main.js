function btnDarkMode() {
    const btnDarkMode = document.querySelector(".dark-mode-btn");
    const btnIconMode = document.querySelector(".dark-mode-btn__icon");

    // 1. Проверка темной темы на уровне системных настроек
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
        btnIconMode.style.left = "26px"; // устанавливаем позицию
    }

    // 2. Проверка темной темы в localStorage
    if (localStorage.getItem('darkMode') === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
        btnIconMode.style.left = "26px"; // устанавливаем позицию

    } else if (localStorage.getItem("darkMode") === "light") {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
        btnIconMode.style.left = "0"; // сбрасываем позицию
    }

    // Если меняются системные настройки, меняем тему
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
            btnIconMode.style.left = "26px"; // устанавливаем позицию
            localStorage.setItem("darkMode", "dark");

        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
            btnIconMode.style.left = "0"; // сбрасываем позицию
            localStorage.setItem("darkMode", "light");
        }
    });

    // Включение ночного режима по кнопке
    btnDarkMode.onclick = function () {
        btnDarkMode.classList.toggle("dark-mode-btn--active");
        const isDark = document.body.classList.toggle("dark");

        if (isDark) {
            btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
            btnIconMode.style.left = "26px"; // устанавливаем позицию
            localStorage.setItem("darkMode", "dark");
        } else {
            btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
            btnIconMode.style.left = "0"; // сбрасываем позицию
            localStorage.setItem("darkMode", "light");
        }
    };
}

// Убедимся, что DOM загружен, прежде чем выполнять функцию
// document.addEventListener('DOMContentLoaded', btnDarkMode);
// window.addEventListener('resize', function () {
//     "use strict";
//     window.location.reload();
// });






// function btnDarkMode() {
//     const btnDarkMode = document.querySelector(".dark-mode-btn");
//     const btnIconMode = document.querySelector(".dark-mode-btn__icon");
//     const logo = document.querySelector(".logo-img");

//     // 1. Проверка темной темы на уровне системных настроек
//     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         btnDarkMode.classList.add("dark-mode-btn--active");
//         document.body.classList.add("dark");
//         logo.src = './img/logo/logo-night.svg'; // обновляем Лого
//         btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
//         btnIconMode.style.left = "26px"; // устанавливаем позицию
//     }

//     // 2. Проверка темной темы в localStorage
//     if (localStorage.getItem('darkMode') === 'dark') {
//         btnDarkMode.classList.add("dark-mode-btn--active");
//         document.body.classList.add("dark");
//         logo.src = './img/logo/logo-night.svg'; // обновляем Лого
//         btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
//         btnIconMode.style.left = "26px"; // устанавливаем позицию

//     } else if (localStorage.getItem("darkMode") === "light") {
//         btnDarkMode.classList.remove("dark-mode-btn--active");
//         document.body.classList.remove("dark");
//         logo.src = './img/logo/logo-day.png'; // обновляем Лого
//         btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
//         btnIconMode.style.left = "0"; // сбрасываем позицию
//     }

//     // Если меняются системные настройки, меняем тему
//     window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
//         const newColorScheme = event.matches ? "dark" : "light";

//         if (newColorScheme === "dark") {
//             btnDarkMode.classList.add("dark-mode-btn--active");
//             document.body.classList.add("dark");
//             logo.src = './img/logo/logo-night.svg'; // обновляем Лого
//             btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
//             btnIconMode.style.left = "26px"; // устанавливаем позицию
//             localStorage.setItem("darkMode", "dark");

//         } else {
//             btnDarkMode.classList.remove("dark-mode-btn--active");
//             document.body.classList.remove("dark");
//             logo.src = './img/logo/logo-day.png'; // обновляем Лого
//             btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
//             btnIconMode.style.left = "0"; // сбрасываем позицию
//             localStorage.setItem("darkMode", "light");
//         }
//     });

//     // Включение ночного режима по кнопке
//     btnDarkMode.onclick = function () {
//         btnDarkMode.classList.toggle("dark-mode-btn--active");
//         const isDark = document.body.classList.toggle("dark");

//         if (isDark) {
//             btnIconMode.src = './img/icons/moon.svg'; // обновляем иконку
//             btnIconMode.style.left = "26px"; // устанавливаем позицию
//             localStorage.setItem("darkMode", "dark");
//         } else {
//             btnIconMode.src = './img/icons/sun.svg'; // обновляем иконку
//             btnIconMode.style.left = "0"; // сбрасываем позицию
//             localStorage.setItem("darkMode", "light");
//         }
//     };
// }

// // Убедимся, что DOM загружен, прежде чем выполнять функцию
// document.addEventListener('DOMContentLoaded', btnDarkMode);
// window.addEventListener('resize', function () {
//     "use strict";
//     window.location.reload();
// });