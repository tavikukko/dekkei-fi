// Hero parallax + on-scroll section reveals.
(function () {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	// The hero image is slightly taller than its frame, so it can drift
	// downwards while scrolling without exposing a gap at the top.
	const hero = document.querySelector('.hero-inner');
	const heroImg = hero ? hero.querySelector('img') : null;

	if (hero && heroImg) {
		let ticking = false;

		const render = () => {
			ticking = false;
			if (reduceMotion.matches) {
				heroImg.style.transform = '';
				return;
			}
			const slack = Math.max(heroImg.offsetHeight - hero.offsetHeight, 0);
			const offset = Math.min(window.scrollY * 0.35, slack);
			heroImg.style.transform = `translate3d(0, ${offset}px, 0)`;
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(render);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		reduceMotion.addEventListener('change', render);
		render();
	}

	const revealed = document.querySelectorAll('.reveal');
	if (!('IntersectionObserver' in window) || reduceMotion.matches) {
		revealed.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

	revealed.forEach((el) => observer.observe(el));
})();
