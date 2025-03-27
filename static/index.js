
  
  

  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    document.getElementById('modeToggle').addEventListener('change', () => {
      document.body.classList.toggle('light');
      document.body.classList.toggle('dark');
    });
  
    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    reveals.forEach(el => observer.observe(el));
  
    // Custom Carousel Logic
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
  
    let currentIndex = 0;
    const itemsToShow = 3;
  
    const updateCarousel = () => {
      const itemWidth = items[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    const moveNext = () => {
      if (currentIndex < items.length - itemsToShow) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    };
  
    const movePrev = () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = items.length - itemsToShow;
      }
      updateCarousel();
    };
  
    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);
    setInterval(moveNext, 3000);
  
    updateCarousel(); // Initial position
  });
  


// Timeline Progress Fill Animation
const centerFill = document.querySelector('.timeline-progress-fill');
document.querySelectorAll('.timeline-item').forEach((item, index, allItems) => {
  const percent = ((index + 1) / allItems.length) * 100;
  item.addEventListener('mouseenter', () => {
    centerFill.style.height = `${percent}%`;
  });
  item.addEventListener('mouseleave', () => {
    centerFill.style.height = `0%`;
  });
});

