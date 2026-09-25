// Parallax effect for hero image
document.addEventListener('scroll', function() {
  const heroImg = document.querySelector('.hero-inner img');
  if (!heroImg) return;
  const scrolled = window.scrollY;
  // Move image down as you scroll (original effect)
  heroImg.style.transform = `translateY(${scrolled * 0.2}px)`;
});
