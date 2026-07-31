(() => {
  // Delegated + capture-phase: the "toggle" event does not bubble in all
  // browsers, and this site's runtime re-creates the <details> nodes after
  // load, so listeners bound directly to them get lost. Capture-phase
  // delegation on document catches every toggle regardless of node identity.
  document.addEventListener(
    "toggle",
    (e) => {
      const d = e.target;
      if (!d || d.tagName !== "DETAILS" || !d.open) return;
      [...d.parentElement.children]
        .filter((el) => el.tagName === "DETAILS" && el !== d)
        .forEach((el) => { el.open = false; });
    },
    true
  );
})();
