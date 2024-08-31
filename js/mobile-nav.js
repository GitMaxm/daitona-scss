
// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');

// Функция для закрытия меню
function closeNav() {
	nav.classList.remove('mobile-nav--open');
	menuIcon.classList.remove('nav-icon--active');
	document.body.classList.remove('no-scroll');
}

navBtn.onclick = function () {
	nav.classList.toggle('mobile-nav--open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
};

// Получаем все ссылки внутри меню
const navLinks = document.querySelectorAll('.mobile-nav a');

// Добавляем обработчик события для каждой ссылки
navLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		closeNav(); // Закрываем меню при клике на ссылку
	});
});

