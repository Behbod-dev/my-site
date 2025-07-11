function openProject(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  // بخش 1: مدیریت کلیک روی لینک‌های ناوبری برای اسکرول نرم
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // بخش 2: انیمیشن اسکرول (اضافه کردن کلاس show به سکشن‌ها)
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // بخش 3: افکت تغییر رنگ پس‌زمینه برای متون fancy-text هنگام کلیک
  const colors = [
    'linear-gradient(90deg, #00ffc3, #1e3c72)',
    'linear-gradient(90deg, #ff00c8, #721e3c)',
    'linear-gradient(90deg, #ffdd00, #ff5500)',
    'linear-gradient(90deg, #00aaff, #004477)'
  ];

  const fancyTexts = document.querySelectorAll('.fancy-text');

  fancyTexts.forEach(el => {
    el.style.background = colors[0];  // رنگ اولیه

    el.addEventListener('click', () => {
      let currentBg = el.style.background;
      let newBg;
      do {
        newBg = colors[Math.floor(Math.random() * colors.length)];
      } while (newBg === currentBg);

      el.style.background = newBg;
    });
  });
});

document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", e => {
    const x = e.offsetX;
    const y = e.offsetY;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  if (hour < 7 || hour > 19) {
    document.body.classList.add("dark");
  }
});
