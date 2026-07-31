(() => {
  // Delegated: this site's runtime re-creates DOM nodes after load, so
  // listeners bound directly to the original buttons get lost. A single
  // delegated listener on document survives any node replacement.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".testi-toggle");
    if (!btn) return;
    const text = btn.previousElementSibling;
    if (!text || !text.classList.contains("testi-text")) return;
    const expanded = text.classList.toggle("is-expanded");
    btn.textContent = expanded ? "Read Less" : "Read More";
    btn.setAttribute("aria-expanded", String(expanded));
  });
})();
