(function () {
  function closeMenu() {
    var panel = document.getElementById("mobileNav");
    var btn = document.getElementById("mobileMenuBtn");
    if (panel) panel.classList.remove("open");
    document.body.classList.remove("menu-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    var panel = document.getElementById("mobileNav");
    var btn = document.getElementById("mobileMenuBtn");
    if (panel) panel.classList.add("open");
    document.body.classList.add("menu-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;
    if (e.target.closest("#mobileMenuBtn")) {
      openMenu();
    } else if (e.target.closest("#mobileMenuClose") || e.target.closest("#mobileNav a")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) closeMenu();
  });
})();
