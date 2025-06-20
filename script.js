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
