/* =============================================================
   lang-switch.js — 中英一键切换 + 论文筛选
   依赖：head/custom.html 里的早期脚本先设置 <html data-lang>
   切换时同步：语言可见性、<html lang>、标题、meta description、
   所有 [data-lang-btn] 状态、localStorage、URL 的 ?lang=
   ============================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORE_KEY = "kz-lang";

  function setUrl(lang) {
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", lang);
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) { /* file:// 或受限环境 */ }
  }

  function apply(lang, updateUrl) {
    if (lang !== "zh" && lang !== "en") return;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) {}

    var buttons = document.querySelectorAll("[data-lang-btn]");
    Array.prototype.forEach.call(buttons, function (b) {
      var on = b.getAttribute("data-lang-btn") === lang;
      if (b.classList) b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var t = window.KZ_TITLES || {};
    var p = window.KZ_PAGE || {};
    var title = t[lang] || document.title;
    if (p[lang]) title = p[lang] + " · " + title;
    document.title = title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta && window.KZ_DESC && window.KZ_DESC[lang]) {
      meta.setAttribute("content", window.KZ_DESC[lang]);
    }

    if (updateUrl !== false) setUrl(lang);
    refreshCount();
  }

  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest ? e.target.closest("[data-lang-btn]") : null;
    if (btn) apply(btn.getAttribute("data-lang-btn"));
  });

  /* ---------- 论文筛选 ---------- */
  function refreshCount() {
    var box = document.getElementById("kz-pub-count");
    var list = document.getElementById("kz-pub-list");
    if (!box || !list) return;
    var n = list.querySelectorAll(".kz-pub:not([hidden])").length;
    var lang = root.getAttribute("data-lang") === "en" ? "en" : "zh";
    var tpl = box.getAttribute("data-tpl-" + lang) || "{n}";
    box.textContent = tpl.replace("{n}", n);
  }

  function filterPubs(q) {
    var list = document.getElementById("kz-pub-list");
    if (!list) return;
    q = (q || "").trim().toLowerCase();
    var nodes = Array.prototype.slice.call(list.children);
    var i, node, yearHeader = null, visibleInYear = 0;

    function flushYear() {
      if (yearHeader) yearHeader.hidden = visibleInYear === 0;
    }

    for (i = 0; i < nodes.length; i++) {
      node = nodes[i];
      if (node.classList.contains("kz-year")) {
        flushYear();
        yearHeader = node;
        visibleInYear = 0;
        continue;
      }
      if (!node.classList.contains("kz-pub")) continue;
      var hay = (node.getAttribute("data-search") || node.textContent || "").toLowerCase();
      var show = !q || hay.indexOf(q) !== -1;
      node.hidden = !show;
      if (show) visibleInYear++;
    }
    flushYear();
    var total = list.querySelectorAll(".kz-pub:not([hidden])").length;
    var empty = document.getElementById("kz-pub-empty");
    if (empty) empty.hidden = total !== 0;
    refreshCount();
  }

  var input = document.getElementById("kz-pub-filter");
  if (input) input.addEventListener("input", function (e) { filterPubs(e.target.value); });

  /* ---------- 启动 ---------- */
  var q = new URLSearchParams(window.location.search).get("lang");
  var initial = (q === "zh" || q === "en") ? q : (root.getAttribute("data-lang") || "en");
  apply(initial, false);
  if (!q) setUrl(initial);
})();
