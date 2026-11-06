/* =============================================================
   app.js — 渲染 + 中英一键切换
   切换逻辑：URL ?lang= > localStorage > 浏览器语言
   切换时同步：页面文案、<html lang>、<title>、meta description、URL
   ============================================================= */
(function () {
  "use strict";

  var S = window.SITE;
  var STORE_KEY = "kai-zhang-site-lang";
  var lang = "zh";
  var filter = "";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function el(id) { return document.getElementById(id); }
  function pick(obj) {
    if (!obj) return "";
    if (obj[lang] !== undefined) return obj[lang];
    return obj.en !== undefined ? obj.en : (obj.zh !== undefined ? obj.zh : "");
  }

  var ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    orcid: '<span class="ico-orcid" aria-hidden="true">iD</span>',
    bili: '<span class="ico-badge ico-badge--bili" aria-hidden="true">B</span>',
    xhs: '<span class="ico-badge ico-badge--xhs" aria-hidden="true">红</span>',
    wechat: '<span class="ico-badge ico-badge--wechat" aria-hidden="true">微</span>'
  };

  function icon(kind) { return ICONS[kind] || ICONS.mail; }

  function detectLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q === "zh" || q === "en") return q;
    try {
      var saved = window.localStorage.getItem(STORE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) { /* localStorage may be blocked */ }
    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function syncUrl(next) {
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", next);
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) { /* file:// or restricted context */ }
  }

  function setLang(next, updateUrl) {
    if (next !== "zh" && next !== "en") return;
    lang = next;
    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    if (updateUrl !== false) syncUrl(lang);

    var t = S.i18n[lang];
    var p = S.profile[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = p.name + " · " + p.role;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.heroLead);

    render();
  }

  /* ---------- 各部分渲染 ---------- */

  function renderStatic() {
    var t = S.i18n[lang];
    var p = S.profile[lang];

    document.querySelectorAll("[data-bind]").forEach(function (node) {
      node.textContent = p[node.getAttribute("data-bind")] || "";
    });
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var v = t[node.getAttribute("data-i18n")];
      if (typeof v === "string") node.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (node) {
      var v = t[node.getAttribute("data-i18n-ph")];
      if (typeof v === "string") node.setAttribute("placeholder", v);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var orcidLink = el("orcid-link");
    orcidLink.href = S.meta.orcid;
    orcidLink.textContent = S.meta.orcidId;

    el("hero-title").innerHTML = esc(t.heroGreeting) + '<span class="hero__name">' + esc(p.name) + "</span>";
    el("hero-lead").textContent = t.heroLead;
  }

  function renderNav() {
    var n = S.i18n[lang].nav;
    var items = [
      ["about", n.about], ["research", n.research], ["about-detail", n.aboutDetail],
      ["experience", n.experience], ["publications", n.publications],
      ["outreach", n.outreach], ["contact", n.contact]
    ];
    el("topnav").innerHTML = items.map(function (it) {
      return '<a href="#' + it[0] + '" data-nav="' + it[0] + '">' + esc(it[1]) + "</a>";
    }).join("");
  }

  function renderHeroActions() {
    var t = S.i18n[lang];
    var out = [];
    out.push('<a class="btn btn--primary" href="mailto:' + esc(S.meta.email) + '">' + icon("mail") + "<span>" + esc(t.emailLabel) + "</span></a>");
    out.push('<a class="btn" href="' + esc(S.meta.orcid) + '" target="_blank" rel="noopener noreferrer">' + icon("orcid") + "<span>ORCID</span></a>");
    if (S.meta.scholar) {
      out.push('<a class="btn" href="' + esc(S.meta.scholar) + '" target="_blank" rel="noopener noreferrer">Google Scholar</a>');
    }
    if (S.meta.cv) {
      out.push('<a class="btn" href="' + esc(S.meta.cv) + '">' + esc(t.cvLabel) + "</a>");
    }
    el("hero-actions").innerHTML = out.join("");
  }

  function renderLinks(container, extraClass) {
    container.innerHTML = S.links.map(function (l) {
      var external = l.href.indexOf("http") === 0;
      var attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return '<a class="link-item ' + (extraClass || "") + '" href="' + esc(l.href) + '"' + attrs + ">" +
        '<span class="link-item__ico">' + icon(l.icon) + "</span>" +
        "<span>" + esc(pick(l.label)) + "</span></a>";
    }).join("");
  }

  function renderResearch() {
    el("research-grid").innerHTML = S.research.map(function (r) {
      var c = pick(r);
      return '<article class="card">' +
        '<div class="card__badge">' + esc(r.icon) + "</div>" +
        "<h3>" + esc(c.title) + "</h3>" +
        "<p>" + esc(c.text) + "</p></article>";
    }).join("");
  }

  function renderAbout() {
    el("about-body").innerHTML = S.about[lang].map(function (para) {
      return "<p>" + para + "</p>"; // 内容受控，允许 <sup> 等上标
    }).join("");
  }

  function renderExperience() {
    var t = S.i18n[lang];
    var e = S.experience;
    var groups = [
      [t.eduLabel, e.education],
      [t.apptLabel, e.appointments],
      [t.serviceLabel, e.service]
    ];
    el("experience-body").innerHTML = groups.map(function (g) {
      var rows = g[1].map(function (it) {
        var c = pick(it);
        var period = it.period === "现任" ? t.current : it.period;
        var slides = it.slides && S.meta.slides
          ? '<a class="exp-item__slides" href="' + esc(S.meta.slides) + '" download>' + esc(t.slidesLabel) + "</a>"
          : "";
        return '<div class="exp-item' + (it.current ? " is-current" : "") + '">' +
          '<span class="exp-item__period">' + esc(period) + "</span>" +
          '<div class="exp-item__body">' +
            '<p class="exp-item__title">' + esc(c.title) + "</p>" +
            '<p class="exp-item__org">' + esc(c.org) + "</p>" + slides +
          "</div></div>";
      }).join("");
      return '<div class="exp-group"><h3 class="subhead">' + esc(g[0]) + '</h3><div class="exp-list">' + rows + "</div></div>";
    }).join("");
  }

  function renderOutreach() {
    var t = S.i18n[lang];
    el("outreach-list").innerHTML = S.outreach.map(function (o) {
      var c = pick(o);
      var foot = o.href
        ? '<a class="account__link" href="' + esc(o.href) + '" target="_blank" rel="noopener noreferrer">' + esc(t.visitHint) + "</a>"
        : '<span class="account__hint">' + esc(t.searchHint) + "</span>";
      return '<div class="account">' +
        '<span class="account__ico">' + icon(o.icon) + "</span>" +
        '<div class="account__body">' +
          '<p class="account__label">' + esc(c.label) + "</p>" +
          '<p class="account__detail">' + esc(c.detail) + "</p>" + foot +
        "</div></div>";
    }).join("");
  }

  function pubMatches(pub, q) {
    if (!q) return true;
    var hay = [pub.title, pub.journal, pub.year, pub.tag.zh, pub.tag.en, pub.doi, pub.pmid]
      .join(" ").toLowerCase();
    return hay.indexOf(q.toLowerCase()) !== -1;
  }

  function renderPublications() {
    var t = S.i18n[lang];
    var q = filter.trim();
    var rows = S.publications.filter(function (p) { return pubMatches(p, q); });
    var lastYear = null;
    var html = "";

    rows.forEach(function (p) {
      if (p.year !== lastYear) {
        html += '<li class="pub-list__year">' + esc(p.year) + "</li>";
        lastYear = p.year;
      }
      var links = [];
      if (p.doi) links.push('<a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener noreferrer">' + esc(t.doi) + "</a>");
      if (p.pmid) links.push('<a href="https://pubmed.ncbi.nlm.nih.gov/' + esc(p.pmid) + '/" target="_blank" rel="noopener noreferrer">' + esc(t.pubmed) + "</a>");
      html += '<li class="pub">' +
        '<div class="pub__body">' +
          '<p class="pub__title">' + esc(p.title) + "</p>" +
          '<p class="pub__meta"><span class="pub__journal">' + esc(p.journal) + "</span>" +
            '<span class="pub__tag">' + esc(pick(p.tag)) + "</span></p>" +
          (links.length ? '<p class="pub__links">' + links.join('<span class="dot">·</span>') + "</p>" : "") +
        "</div></li>";
    });

    if (!rows.length) {
      html = '<li class="pub-empty">—</li>';
    }
    el("pub-list").innerHTML = html;
    el("pub-count").textContent = t.pubCount.replace("{n}", rows.length);
    el("pub-intro").textContent = t.pubIntro;
    el("pub-foot").innerHTML = esc(t.pubFoot) + ' <a href="' + esc(S.meta.orcid) + '" target="_blank" rel="noopener noreferrer">ORCID ↗</a>';
  }

  function renderTeaching() {
    el("teaching-list").innerHTML = S.teaching.map(function (item) {
      var c = pick(item);
      return '<div class="timeline__item">' +
        '<span class="timeline__period">' + esc(pick(item.period)) + "</span>" +
        '<div class="timeline__body"><h3>' + esc(c.title) + "</h3><p>" + esc(c.text) + "</p></div></div>";
    }).join("");
  }

  function renderContact() {
    var t = S.i18n[lang];
    el("contact-body").innerHTML = "<p>" + esc(t.contactBody) + "</p>" +
      '<p class="contact__mail"><a href="mailto:' + esc(S.meta.email) + '">' + esc(S.meta.email) + "</a></p>";
  }

  function renderFooter() {
    el("footer-line").textContent = S.i18n[lang].footerLine.replace("{updated}", S.meta.updated);
  }

  function render() {
    renderStatic();
    renderNav();
    renderHeroActions();
    renderLinks(el("sidebar-links"));
    renderLinks(el("contact-links"), "link-item--large");
    renderResearch();
    renderAbout();
    renderExperience();
    renderPublications();
    renderTeaching();
    renderOutreach();
    renderContact();
    renderFooter();
    observeSections();
  }

  /* 目录高亮（随滚动） */
  var observer = null;
  function observeSections() {
    if (!("IntersectionObserver" in window)) return;
    if (observer) observer.disconnect();
    var links = document.querySelectorAll("[data-nav]");
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("data-nav") === e.target.id);
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }

  /* ---------- 事件绑定 ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) { setLang(btn.getAttribute("data-lang-btn")); }
  });

  el("pub-filter").addEventListener("input", function (e) {
    filter = e.target.value || "";
    renderPublications();
  });

  /* ---------- 启动 ---------- */
  setLang(detectLang(), false);
  // 首次访问也把当前语言写入 URL，便于分享固定语言的链接
  if (!new URLSearchParams(window.location.search).has("lang")) syncUrl(lang);
})();
