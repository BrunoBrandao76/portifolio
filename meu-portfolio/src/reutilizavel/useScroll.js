// src/composables/useScroll.js
// Scroll suave para seções do site (navegação).

export function useScroll() {
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { scrollToId, scrollToTop };
}
