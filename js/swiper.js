const servicesSwiper = new Swiper('.services-swiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	speed: 600,
	loop: true,

	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	keyboard: {
		enabled: true,
	},

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
	},

	// Адаптивные настройки для различных разрешений
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		970: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
