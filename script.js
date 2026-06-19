// ============================================================
// Aditya Raj Singh — Portfolio interactions
// ============================================================
(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Terminal typing effect ---------- */
  const phrases = [
    "retrieval-augmented chatbots.",
    "computer vision pipelines.",
    "deep learning models.",
    "systems that ship to production."
  ];
  const terminalEl = document.getElementById("terminalText");
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      terminalEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
      setTimeout(typeLoop, 45 + Math.random() * 35);
    } else {
      charIndex--;
      terminalEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 300);
        return;
      }
      setTimeout(typeLoop, 22);
    }
  }
  if (terminalEl) setTimeout(typeLoop, 900);

  /* ---------- Pipeline scroll progress rail ---------- */
  const railFill = document.getElementById("railFill");
  function updateRail() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (railFill) railFill.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateRail, { passive: true });
  updateRail();

  /* ---------- Custom signal cursor ---------- */
  const dot = document.getElementById("signalDot");
  if (dot && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let raf = null;
    window.addEventListener("mousemove", (e) => {
      dot.style.opacity = "1";
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
      });
    });
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => dot.style.transform = "translate(-50%, -50%) scale(2.2)");
      el.addEventListener("mouseleave", () => dot.style.transform = "translate(-50%, -50%) scale(1)");
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .timeline__item, .project, .stack-card, .about__body, .contact__inner"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------- Animated counters for project stats ---------- */
  const counters = document.querySelectorAll(".stat__num");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const startTime = performance.now();

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = value + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => counterObserver.observe(el));

  /* ---------- Active nav link highlight ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__links a");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.style.color = link.getAttribute("href") === `#${id}` ? "var(--signal)" : "";
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((s) => navObserver.observe(s));

})();
