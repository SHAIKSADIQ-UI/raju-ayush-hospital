/**
 * GSAP Hero Section & Navbar Effect: ScrollTrigger, Observer, SplitText & Smart Auto-Hide Header
 */
(function () {
  function initHeroGSAP() {
    if (typeof gsap === "undefined") {
      console.warn("GSAP is not loaded.");
      return;
    }

    // Register Plugins
    if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
    if (typeof Observer !== "undefined") gsap.registerPlugin(Observer);

    if (typeof Lenis !== "undefined" && !window.__raLenis) {
      const lenis = new Lenis({
        duration: 1.15,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.15
      });
      window.__raLenis = lenis;
      if (typeof ScrollTrigger !== "undefined") {
        lenis.on("scroll", ScrollTrigger.update);
      }
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    const customHero = document.querySelector(".ra-home-hero");
    if (customHero) {
      const title = customHero.querySelector(".ra-home-hero__title");
      const copy = customHero.querySelector(".ra-home-hero__copy");
      const cta = customHero.querySelector(".ra-home-hero__cta");
      const imageWrap = customHero.querySelector(".ra-home-hero__image-wrap");
      const image = customHero.querySelector(".ra-home-hero__image");

      const heroText = [title, copy, cta].filter(Boolean);
      gsap.set([title, copy, cta, imageWrap, image].filter(Boolean), { clearProps: "all" });

      // Preserve the staggered reveal and explicitly settle in the visible state.
      gsap.fromTo(heroText,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.08,
          onComplete: function () { gsap.set(heroText, { opacity: 1, y: 0 }); }
        }
      );

      if (imageWrap && image) {
        gsap.fromTo(imageWrap,
          { y: 46, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.28 }
        );
      }

      if (typeof ScrollTrigger !== "undefined" && imageWrap && image) {
        gsap.timeline({
          scrollTrigger: {
            trigger: customHero,
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
            invalidateOnRefresh: true
          }
        })
          .to(image, { scale: 1.14, yPercent: -4, ease: "none" }, 0)
          .to(imageWrap, {
            // The wrapper stays in document flow so the ticker remains attached.
            clipPath: "ellipse(60% 100% at 50% 100%)",
            ease: "none"
          }, 0);
      }
    }

    // -------------------------------------------------------------
    // 1. SPLITTEXT EFFECT (Hero Headline Character Split & Reveal)
    // -------------------------------------------------------------
    const heroHeading = document.querySelector("#comp-ml7s4ypm h1 span") || document.querySelector("#comp-ml7s4ypm h1");

    if (heroHeading) {
      const text = heroHeading.textContent || heroHeading.innerText;
      // Wrap characters in split <span> tags
      heroHeading.innerHTML = text
        .split("")
        .map(char => `<span class="gsap-split-char" style="display:inline-block; opacity:0; transform:translateY(45px) rotateX(-90deg);">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      // Staggered 3D character pop-up reveal
      gsap.to("#comp-ml7s4ypm .gsap-split-char", {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.85,
        stagger: 0.035,
        ease: "back.out(1.7)",
        delay: 0.2
      });
    }

    // Hero Subtext Slide In
    const heroSubtext = document.querySelector("#comp-ml7sd5p7 p");
    if (heroSubtext) {
      gsap.from(heroSubtext, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power2.out",
        delay: 0.6
      });
    }

    // Hero CTA Button Scale Float
    const heroBtn = document.querySelector("#comp-ml7sbsj5");
    if (heroBtn) {
      gsap.from(heroBtn, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.5)",
        delay: 0.85
      });
    }

    // -------------------------------------------------------------
    // 2. SCROLLTRIGGER EFFECT (Scroll-Based Zoom-In on Hero Image)
    // -------------------------------------------------------------
    const heroImageSec = document.querySelector("#comp-ml7skde0");
    // Target all layers: background div, wow-image, and actual img tag
    const heroImgLayer = document.querySelector("#comp-ml7skdea");
    const heroImgMedia = document.querySelector("#comp-ml7skdea [data-motion-part*='BG_MEDIA']");
    const heroWowImage = document.querySelector("#bgImg_comp-ml7skdea");
    const heroImgTag = document.querySelector("#bgImg_comp-ml7skdea img") || document.querySelector("#comp-ml7skdea img");

    // Collect all valid zoom targets
    const zoomTargets = [heroImgLayer, heroImgMedia, heroWowImage, heroImgTag].filter(Boolean);

    if (heroImageSec && zoomTargets.length > 0) {
      // Set initial state on all targets
      zoomTargets.forEach(function (target) {
        gsap.set(target, { scale: 1.0, transformOrigin: "center center", overwrite: true });
      });

      if (typeof ScrollTrigger !== "undefined") {
        // Smooth scroll-driven zoom-in on ALL image layers
        zoomTargets.forEach(function (target) {
          gsap.to(target, {
            scrollTrigger: {
              trigger: heroImageSec,
              start: "top 85%",
              end: "bottom 30%",
              scrub: 0.4
            },
            scale: 1.15,
            ease: "none",
            overwrite: "auto"
          });
        });
      }
    }

    // -------------------------------------------------------------
    // 3. OBSERVER EFFECT (Mouse Cursor 3D Tilt & Touch Velocity)
    // -------------------------------------------------------------
    if (heroImageSec && typeof Observer !== "undefined") {
      const setTiltX = gsap.quickTo(heroImageSec, "rotationX", { duration: 0.6, ease: "power2.out" });
      const setTiltY = gsap.quickTo(heroImageSec, "rotationY", { duration: 0.6, ease: "power2.out" });
      const setScale = gsap.quickTo(heroImageSec, "scale", { duration: 0.6, ease: "power2.out" });

      Observer.create({
        target: heroImageSec,
        type: "pointer,touch,wheel",
        onMove: function (self) {
          const bounds = heroImageSec.getBoundingClientRect();
          const relX = (self.x - bounds.left) / bounds.width - 0.5;
          const relY = (self.y - bounds.top) / bounds.height - 0.5;

          // Real-time 3D tilt tracking pointer
          setTiltX(relY * -12);
          setTiltY(relX * 12);
          setScale(1.02);
        },
        onStop: function () {
          setTiltX(0);
          setTiltY(0);
          setScale(1.0);
        }
      });
    }

    // -------------------------------------------------------------
    // 4. SMART AUTO-HIDE NAVBAR ON SCROLL DIRECTION (Vanilla JS)
    //    Works with #siteHeader .site-header and CSS classes
    // -------------------------------------------------------------
    (function () {
      var header = document.getElementById("siteHeader");
      var specialistsBtn = document.getElementById("raSpecialistsBtn");
      var megaMenu = document.getElementById("raMegaMenu");
      var navLinks = document.getElementById("raNavLinks");
      var mobileToggle = document.getElementById("raMobileToggle");

      if (!header || header.classList.contains("site-header")) return;

      // --- SMART SCROLL ---
      var lastScrollY = window.scrollY;
      var ticking = false;
      var scrollThreshold = 8;

      function handleNavbarScroll() {
        var currentScrollY = window.scrollY;
        if (currentScrollY <= 30) {
          header.classList.remove("nav-hidden");
          header.classList.add("nav-visible");
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }
        if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
          ticking = false;
          return;
        }
        if (currentScrollY > lastScrollY) {
          header.classList.add("nav-hidden");
          header.classList.remove("nav-visible");
          closeMegaMenu();
        } else {
          header.classList.remove("nav-hidden");
          header.classList.add("nav-visible");
        }
        lastScrollY = currentScrollY;
        ticking = false;
      }

      window.addEventListener("scroll", function () {
        if (!ticking) {
          window.requestAnimationFrame(handleNavbarScroll);
          ticking = true;
        }
      }, { passive: true });

      // --- SPECIALISTS DROPDOWN ---
      function openMegaMenu() {
        if (!megaMenu || !specialistsBtn) return;
        megaMenu.classList.add("open");
        specialistsBtn.classList.add("is-open");
        specialistsBtn.setAttribute("aria-expanded", "true");
      }

      function closeMegaMenu() {
        if (!megaMenu || !specialistsBtn) return;
        megaMenu.classList.remove("open");
        specialistsBtn.classList.remove("is-open");
        specialistsBtn.setAttribute("aria-expanded", "false");
      }

      if (specialistsBtn) {
        specialistsBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          if (megaMenu.classList.contains("open")) {
            closeMegaMenu();
          } else {
            openMegaMenu();
          }
        });
      }

      // Click outside closes dropdown
      document.addEventListener("click", function (e) {
        if (megaMenu && specialistsBtn &&
          !megaMenu.contains(e.target) &&
          !specialistsBtn.contains(e.target)) {
          closeMegaMenu();
        }
      });

      // --- MOBILE MENU ---
      if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
          var isOpen = navLinks.classList.contains("mobile-open");
          if (isOpen) {
            navLinks.classList.remove("mobile-open");
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("nav-open");
            document.documentElement.classList.remove("nav-open");
            closeMegaMenu();
          } else {
            navLinks.classList.add("mobile-open");
            mobileToggle.classList.add("active");
            mobileToggle.setAttribute("aria-expanded", "true");
            document.body.classList.add("nav-open");
            document.documentElement.classList.add("nav-open");
          }
        });
      }

      // Close mobile menu on link click
      var closeOnClick = document.querySelectorAll(".ra-nav-link, .ra-specialist-card, .ra-explore-link, .ra-nav-cta");
      closeOnClick.forEach(function (link) {
        link.addEventListener("click", function () {
          if (navLinks) navLinks.classList.remove("mobile-open");
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
          }
          document.body.classList.remove("nav-open");
          document.documentElement.classList.remove("nav-open");
          closeMegaMenu();
        });
      });

      // --- ESCAPE KEY ---
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeMegaMenu();
          if (navLinks) navLinks.classList.remove("mobile-open");
          if (mobileToggle) mobileToggle.classList.remove("active");
          document.body.classList.remove("nav-open");
          document.documentElement.classList.remove("nav-open");
        }
      });
    })();

    // -------------------------------------------------------------
    // 5. SCROLL-DRIVEN TEXT REVEAL EFFECT (Our Story section word-by-word reveal)
    // -------------------------------------------------------------
    let storyScrollTrigger = null;

    function initStoryTextReveal() {
      const storySubtitle = document.querySelector("#comp-ml7tr4hk p");
      const storyBody = document.querySelector("#comp-ml7trlgd p");

      if (storyScrollTrigger) {
        storyScrollTrigger.kill();
        storyScrollTrigger = null;
      }

      [storySubtitle, storyBody].forEach(function (el) {
        if (!el) return;
        const text = el.textContent || el.innerText;
        const words = text.trim().split(/\s+/);
        if (!words.length || (words.length === 1 && !words[0])) return;
        el.innerHTML = words
          .map(function (word) {
            return '<span class="reveal-word">' + word + '</span>';
          })
          .join(" ");
      });

      const revealWords = gsap.utils.toArray("#comp-ml7tr4hk p .reveal-word, #comp-ml7trlgd p .reveal-word");
      if (revealWords.length > 0 && typeof ScrollTrigger !== "undefined") {
        const tween = gsap.to(revealWords, {
          scrollTrigger: {
            trigger: "#comp-ml7sw9a2", // Parent container
            start: "top 80%",          // Start revealing when the section's top enters 80% viewport height
            end: "bottom 60%",         // End animation when the bottom is at 60% viewport height
            scrub: 0.5,                // Smooth scrub
          },
          opacity: 1,                  // Target opacity
          stagger: 0.03,               // Stagger between words
          ease: "none"                 // Linear reveal linked to scroll
        });
        if (tween && tween.scrollTrigger) {
          storyScrollTrigger = tween.scrollTrigger;
        }
      }
    }

    initStoryTextReveal();

    // Re-initialize text reveal whenever language switches (English <-> Telugu)
    window.addEventListener("ra-language-changed", function () {
      setTimeout(function () {
        initStoryTextReveal();
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 50);
    });

    // -------------------------------------------------------------
    // 6. SERVICES GRID SCROLL EFFECT (Care Options Section Cards Slide)
    // -------------------------------------------------------------
    const careSection = document.querySelector("#comp-ml87rfui");
    const row1Cards = [
      document.querySelector("#comp-ml7wbjg4"), // Personalized Care Plans
      document.querySelector("#comp-ml7wnuq2")  // Daily Living Assistance
    ].filter(Boolean);
    const row2Cards = [
      document.querySelector("#comp-ml7wo14c"), // Medical Support
      document.querySelector("#comp-ml7wo15t")  // Specialized Care Programs
    ].filter(Boolean);

    if (careSection && typeof ScrollTrigger !== "undefined") {
      // Row 1: Slides from right to left (starts shifted right)
      if (row1Cards.length > 0) {
        gsap.from(row1Cards, {
          scrollTrigger: {
            trigger: careSection,
            start: "top bottom", // Starts when section top enters viewport bottom
            end: "bottom center", // Ends when section bottom is in the middle of viewport
            scrub: 0.5,
          },
          x: 230,
          ease: "power1.out",
          overwrite: "auto"
        });
      }

      // Row 2: Slides from left to right (starts shifted left)
      if (row2Cards.length > 0) {
        gsap.from(row2Cards, {
          scrollTrigger: {
            trigger: careSection,
            start: "top bottom",
            end: "bottom center",
            scrub: 0.5,
          },
          x: -220,
          ease: "power1.out",
          overwrite: "auto"
        });
      }
    }
  }


  // -------------------------------------------------------------
  // 6.6 FULL-WIDTH IMAGE - Scroll-Driven Horizontal Movement
  // Section: #comp-ml7z68t8 (between Specialized Focus & Our Approach)
  // Scroll DOWN → image moves LEFT to RIGHT
  // Scroll UP   → image moves RIGHT to LEFT
  // -------------------------------------------------------------
  const imageScrollSection = document.querySelector("#comp-ml7z68t8");
  const imageScrollMedia = document.querySelector("#comp-ml7z68t8 ._media_x7ip3_25");

  if (imageScrollSection && imageScrollMedia && typeof ScrollTrigger !== "undefined") {
    // Start the image shifted to the left, then translate right as user scrolls
    gsap.set(imageScrollMedia, { x: "-15%", transformOrigin: "center center" });

    gsap.to(imageScrollMedia, {
      scrollTrigger: {
        trigger: imageScrollSection,
        start: "top 90%",      // Start when section top enters 90% of viewport
        end: "bottom 10%",     // End when section bottom reaches 10% of viewport
        scrub: 0.5             // Smooth 0.5s lag for buttery feel
      },
      x: "0%",                 // Move from -15% (left) to 0% (center) = left-to-right
      ease: "none",
      overwrite: "auto"
    });
  }

  // -------------------------------------------------------------
  // 7. GSAP CARD STACKING ANIMATIONS FOR SERVICES SECTION
  // -------------------------------------------------------------
  function initInjectedServices() {
    // Fix: Force all parent containers of .home-services to allow overflow.
    // The Wix CSS sets overflow:hidden/clip on #site-root, #SITE_PAGES, etc.
    // which clips our injected services section.
    document.querySelectorAll(".home-services").forEach((sec) => {
      let parent = sec.parentElement;
      while (parent && parent !== document.body) {
        const cs = window.getComputedStyle(parent);
        if (cs.overflow === 'hidden' || cs.overflow === 'clip' ||
          cs.overflowY === 'hidden' || cs.overflowY === 'clip' ||
          cs.overflowX === 'hidden' || cs.overflowX === 'clip') {
          parent.style.overflow = 'visible';
        }
        parent = parent.parentElement;
      }
    });

    // Services section is now statically placed in the HTML.
    // Just set up GSAP scroll card-stacking animations.
    document.querySelectorAll(".home-services").forEach((sec) => {

      const emptyTrigger = sec.querySelector(".home-services__empty");
      if (!emptyTrigger) return;

      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        let mm = gsap.matchMedia();

        // ── Desktop: smooth staggered card-stacking animation ──
        mm.add("(min-width: 992px)", () => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: emptyTrigger,
              start: "20% 100%",
              end: "140% 100%",
              scrub: 0.5
            }
          });

          const secondCard = sec.querySelector(".single-service.is--second");
          if (secondCard) {
            tl.from(secondCard, {
              yPercent: -100,
              rotate: -4,
              ease: "power1.out",
              transformOrigin: "right top",
              duration: 1
            }, 0);
            const dark = secondCard.querySelector(".single-service__dark");
            if (dark) {
              tl.from(dark, {
                ease: "none",
                opacity: 0.15,
                duration: 0.75
              }, 0);
            }
          }

          const thirdCard = sec.querySelector(".single-service.is--third");
          if (thirdCard) {
            tl.from(thirdCard, {
              yPercent: -200,
              rotate: -8,
              ease: "power1.out",
              transformOrigin: "right top",
              duration: 1
            }, 0.05);
            const dark = thirdCard.querySelector(".single-service__dark");
            if (dark) {
              tl.from(dark, {
                ease: "none",
                opacity: 0.3,
                duration: 0.75
              }, 0.05);
            }
          }

          const fourthCard = sec.querySelector(".single-service.is--fourth");
          if (fourthCard) {
            tl.from(fourthCard, {
              yPercent: -300,
              rotate: -12,
              ease: "power1.out",
              transformOrigin: "right top",
              duration: 1
            }, 0.1);
            const dark = fourthCard.querySelector(".single-service__dark");
            if (dark) {
              tl.from(dark, {
                ease: "none",
                opacity: 0.45,
                duration: 0.75
              }, 0.1);
            }
          }

          const fifthCard = sec.querySelector(".single-service.is--fifth");
          if (fifthCard) {
            tl.from(fifthCard, {
              yPercent: -400,
              rotate: -15,
              ease: "power1.out",
              transformOrigin: "right top",
              duration: 1
            }, 0.15);
            const dark = fifthCard.querySelector(".single-service__dark");
            if (dark) {
              tl.from(dark, {
                ease: "none",
                opacity: 0.6,
                duration: 0.75
              }, 0.15);
            }
          }
        });

        // ── Mobile / Tablet: clean fade-up reveal for each card ──
        mm.add("(max-width: 991px)", () => {
          const cards = sec.querySelectorAll(".single-service");
          cards.forEach((card) => {
            gsap.from(card, {
              y: 30,
              opacity: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            });
          });
        });

        // Refresh triggers on font load, image load, and translation switch
        window.addEventListener("load", () => ScrollTrigger.refresh());
        window.addEventListener("ra-language-changed", () => {
          setTimeout(() => ScrollTrigger.refresh(), 200);
        });
      }
    });
  }

  // Initialize Lenis Smooth Scroll
  function initLenis() {
    if (typeof Lenis !== "undefined") {
      console.log("Initializing Lenis smooth scroll...");
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      window.lenisInstance = lenis; // Store globally for other scripts

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== "undefined") {
        lenis.on('scroll', ScrollTrigger.update);
      }
    }
  }

  // Initialize Custom Mobile Menu Overlay
  function initMobileMenu() {
    if (document.getElementById("siteHeader")) return;

    // 1. Create and inject mobile menu markup if not already present
    if (document.querySelector(".custom-mobile-menu")) return;

    const overlay = document.createElement("div");
    overlay.className = "custom-mobile-menu";
    overlay.innerHTML = `
      <button class="custom-mobile-menu__close" aria-label="Close Menu">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <nav class="custom-mobile-menu__nav">
        <a href="about-us.html" class="custom-mobile-menu__link">About Us</a>
        <a href="#contact" class="custom-mobile-menu__link">Let's Talk</a>
        <a href="diseases.html" class="custom-mobile-menu__link">Diseases</a>
      </nav>
      <div class="custom-mobile-menu__footer">
        <p>© ${new Date().getFullYear()} WH Healthcare Services</p>
      </div>
    `;
    document.body.appendChild(overlay);

    const hamburgerBtn = document.querySelector(".hamburger-open-button") ||
      document.querySelector('[aria-label="Menu"]') ||
      document.querySelector(".hamburgerOpenButton-presets-wrapper button");
    const closeBtn = overlay.querySelector(".custom-mobile-menu__close");
    const links = overlay.querySelectorAll(".custom-mobile-menu__link");

    if (!hamburgerBtn) {
      console.warn("Hamburger open button not found in page DOM.");
      return;
    }

    // Toggle Open Animation (GSAP with CSS transition fallback)
    const openMenu = () => {
      if (typeof gsap !== "undefined") {
        gsap.killTweensOf([overlay, links]);
        gsap.set(overlay, { visibility: "visible" });

        gsap.timeline()
          .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" })
          .fromTo(links,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "back.out(1.5)" },
            "-=0.2"
          );
      } else {
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";
        links.forEach((link, index) => {
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
          link.style.transitionDelay = (index * 0.08) + "s";
        });
      }
    };

    // Toggle Close Animation (GSAP with CSS transition fallback)
    const closeMenu = () => {
      if (typeof gsap !== "undefined") {
        gsap.timeline()
          .to(links, { opacity: 0, y: -20, duration: 0.25, stagger: 0.05, ease: "power2.in" })
          .to(overlay, {
            opacity: 0, duration: 0.35, ease: "power2.inOut", onComplete: () => {
              gsap.set(overlay, { visibility: "hidden" });
            }
          }, "-=0.15");
      } else {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        links.forEach(link => {
          link.style.opacity = "0";
          link.style.transform = "translateY(30px)";
          link.style.transitionDelay = "0s";
        });
      }
    };

    // Bind event listeners
    hamburgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    });

    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Custom smooth scroll handler for contact links
    document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector("#comp-ml9ea3te");
        if (target) {
          if (window.lenisInstance) {
            window.lenisInstance.scrollTo(target);
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initHeroGSAP();
    });
  } else {
    initHeroGSAP();
  }

  // Boot up immediately since script is deferred
  initLenis();
  initInjectedServices();
  initMobileMenu();
})();
