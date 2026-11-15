/* ============================================================
   JOLERO MEDIA — theme.js

   The site is dark only (light mode was removed 2026-11-14). The inline
   <head> bootstrap on each page may still add .theme-light for visitors
   who once chose light or whose phone is set to light, but nothing in
   the CSS responds to it any more. This clears it anyway, forgets any
   saved choice, and keeps the phone's address bar dark.
   ============================================================ */

(function () {
  "use strict";
  document.documentElement.classList.remove("theme-light");
  try { localStorage.removeItem("jolero_theme"); } catch (e) {}
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  for (var i = 0; i < metas.length; i++) {
    metas[i].setAttribute("content", "#0A0A0A");
    metas[i].removeAttribute("media");
  }
})();

/* Holding page: with reduced motion on, the background loop stays on its
   first frame instead of playing. */
(function () {
  if (!window.matchMedia || !matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var v = document.querySelector(".bg video");
  if (v) { v.removeAttribute("autoplay"); v.pause(); }
})();
