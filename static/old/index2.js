document.addEventListener('DOMContentLoaded', () => {
    // 🌗 Theme Toggle
    const toggle = document.getElementById('modeToggle');
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('light');
      document.body.classList.toggle('dark');
    });
  
    // 🎢 Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    reveals.forEach(reveal => observer.observe(reveal));
  
    // 👥 Carousel Setup
    bulmaCarousel.attach('#about-us-carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      autoplay: true,
      loop: true,
      pauseOnHover: true,
      navigation: true,
      pagination: false,
      breakpoints: [
        { changePoint: 1024, slidesToShow: 2 },
        { changePoint: 600, slidesToShow: 1 }
      ]
    });

// Shared center progress bar effect
const centerFill = document.querySelector('.timeline-progress-fill');

document.querySelectorAll('.timeline-item').forEach(item => {
  const percent = item.dataset.progress;
  if (percent) {
    item.addEventListener('mouseenter', () => {
      centerFill.style.height = `${percent}%`;
    });
    item.addEventListener('mouseleave', () => {
      centerFill.style.height = `0%`;
    });
  }
});


  });
  