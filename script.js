document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  hamburgerBtn.addEventListener("click", () => {
    mobileSidebar.classList.add("active");
  });

  closeSidebar.addEventListener("click", () => {
    mobileSidebar.classList.remove("active");
  });

  // Close sidebar when clicking a link
  mobileSidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileSidebar.classList.remove("active");
    });
  });
});
  document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 768) {
      const cards = document.querySelectorAll('.special-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.6
      });

      cards.forEach(card => {
        observer.observe(card);
      });
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 768) {
      const cards = document.querySelectorAll('.special-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.7 // më shumë se gjysma duhet të shfaqet
      });

      cards.forEach(card => {
        observer.observe(card);
      });
    }
  });




