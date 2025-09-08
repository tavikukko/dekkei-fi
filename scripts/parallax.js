// Parallax effect for hero image
document.addEventListener('scroll', function() {
  const heroImg = document.querySelector('.hero-inner img');
  if (!heroImg) return;
  const scrolled = window.scrollY;
  // Move image up to 40px as you scroll
  heroImg.style.transform = `translateY(${scrolled * 0.2}px)`;
});
