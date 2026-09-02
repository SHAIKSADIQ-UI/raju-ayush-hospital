(function () {
    "use strict";

    try {
        console.log(
            "%c SYNNECTIFY %c Crafted with Excellence for Raju AYUSH Hospital ",
            "background: #0041A6; color: #ffffff; font-size: 13px; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
            "background: #0E6937; color: #ffffff; font-size: 13px; font-weight: 500; padding: 4px 8px; border-radius: 0 4px 4px 0;"
        );
        console.log(
            "%c⚡ Modern Healthcare UI Architecture | Digital Marketing & Performance Engine",
            "color: #0041A6; font-size: 11px; font-weight: 600; padding: 2px 0;"
        );
    } catch (e) {}

    function ensureFonts() {
        if (!document.getElementById("google-fonts-loader")) {
            var fontsLink = document.createElement("link");
            fontsLink.id = "google-fonts-loader";
            fontsLink.rel = "stylesheet";
            fontsLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
            document.head.appendChild(fontsLink);
        }

        if (!document.getElementById("global-font-overrides-injected")) {
            var style = document.createElement("style");
            style.id = "global-font-overrides-injected";
            style.textContent = [
                "* {",
                "  --ra-heading-font: 'Plus Jakarta Sans', sans-serif !important;",
                "  --ra-body-font: 'Inter', sans-serif !important;",
                "  --font-heading: 'Plus Jakarta Sans', sans-serif !important;",
                "  --font-body: 'Inter', sans-serif !important;",
                "}",
                "html body *, html body *::before, html body *::after {",
                "  font-family: 'Inter', sans-serif !important;",
                "}",
                "html body h1, html body h2, html body h3, html body h4, html body h5, html body h6,",
                "html body h1 *, html body h2 *, html body h3 *, html body h4 *, html body h5 *, html body h6 * {",
                "  font-family: 'Plus Jakarta Sans', sans-serif !important;",
                "}"
            ].join("\n");
            document.head.appendChild(style);
        }
    }

    function initSiteHeader() {
        var header = document.getElementById("siteHeader");
        if (!header) return false;

        var navLinks = document.getElementById("raNavLinks");
        var mobileToggle = document.getElementById("raMobileToggle");
        var drawerClose = document.getElementById("raDrawerClose");
        var mobileDrawer = document.getElementById("raMobileDrawer");
        var mobileBackdrop = document.getElementById("raMobileBackdrop");
        var specialistsBtn = document.getElementById("raSpecialistsBtn");
        var megaMenu = document.getElementById("raMegaMenu");
        var mobileSpecialistsBtn = document.getElementById("raMobileSpecialistsBtn");
        var mobileSpecialistsSub = document.getElementById("raMobileSpecialistsSub");

        var lastScrollY = window.scrollY || 0;
        var ticking = false;
        var hoverTimer = null;

        function openMegaMenu() {
            if (hoverTimer) clearTimeout(hoverTimer);
            if (megaMenu) megaMenu.classList.add("open");
            if (specialistsBtn) {
                specialistsBtn.classList.add("is-open");
                specialistsBtn.setAttribute("aria-expanded", "true");
            }
        }

        function closeMegaMenu() {
            if (hoverTimer) clearTimeout(hoverTimer);
            if (megaMenu) megaMenu.classList.remove("open");
            if (specialistsBtn) {
                specialistsBtn.classList.remove("is-open");
                specialistsBtn.setAttribute("aria-expanded", "false");
            }
        }

        function setMobileDrawer(open) {
            if (mobileDrawer) mobileDrawer.classList.toggle("open", open);
            if (mobileBackdrop) mobileBackdrop.classList.toggle("open", open);
            if (mobileToggle) {
                mobileToggle.classList.toggle("active", open);
                mobileToggle.setAttribute("aria-expanded", String(open));
            }
            document.body.classList.toggle("nav-open", open);
            document.documentElement.classList.toggle("nav-open", open);
        }

        function updateHeaderOnScroll() {
            var currentScrollY = Math.max(window.scrollY || 0, 0);
            var isMegaOpen = megaMenu && megaMenu.classList.contains("open");
            var isDrawerOpen = mobileDrawer && mobileDrawer.classList.contains("open");

            // Keep navbar visible if mega-menu or mobile drawer is open, or near top
            if (isMegaOpen || isDrawerOpen || currentScrollY < 40) {
                header.classList.remove("nav-hidden");
                header.classList.add("nav-visible");
                lastScrollY = currentScrollY;
                ticking = false;
                return;
            }

            var delta = currentScrollY - lastScrollY;
            // Ignore small jitter movements (less than 10px)
            if (Math.abs(delta) < 10) {
                ticking = false;
                return;
            }

            if (delta > 0 && currentScrollY > 90) {
                // Scrolling down -> hide navbar
                header.classList.add("nav-hidden");
                header.classList.remove("nav-visible");
                closeMegaMenu();
            } else if (delta < 0) {
                // Scrolling up -> reveal navbar
                header.classList.remove("nav-hidden");
                header.classList.add("nav-visible");
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        function requestScrollUpdate() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeaderOnScroll);
                ticking = true;
            }
        }

        header.classList.add("nav-visible");
        updateHeaderOnScroll();
        window.addEventListener("scroll", requestScrollUpdate, { passive: true });

        // --- Desktop Mega Menu Events ---
        if (specialistsBtn && megaMenu) {
            // Click toggle
            specialistsBtn.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                var willOpen = !megaMenu.classList.contains("open");
                if (willOpen) openMegaMenu();
                else closeMegaMenu();
            });

            // Hover behavior on desktop screens (>900px)
            function handleMouseEnter() {
                if (window.innerWidth > 900) {
                    openMegaMenu();
                }
            }

            function handleMouseLeave() {
                if (window.innerWidth > 900) {
                    hoverTimer = setTimeout(function () {
                        closeMegaMenu();
                    }, 220);
                }
            }

            specialistsBtn.addEventListener("mouseenter", handleMouseEnter);
            specialistsBtn.addEventListener("mouseleave", handleMouseLeave);
            megaMenu.addEventListener("mouseenter", handleMouseEnter);
            megaMenu.addEventListener("mouseleave", handleMouseLeave);
        }

        // --- Mobile Drawer Events ---
        if (mobileToggle) {
            mobileToggle.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                var isOpen = mobileDrawer && mobileDrawer.classList.contains("open");
                setMobileDrawer(!isOpen);
            });
        }

        if (drawerClose) {
            drawerClose.addEventListener("click", function (event) {
                event.preventDefault();
                setMobileDrawer(false);
            });
        }

        if (mobileBackdrop) {
            mobileBackdrop.addEventListener("click", function () {
                setMobileDrawer(false);
            });
        }

        // Mobile Specialists Accordion
        if (mobileSpecialistsBtn && mobileSpecialistsSub) {
            mobileSpecialistsBtn.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                var willOpen = !mobileSpecialistsSub.classList.contains("is-open");
                mobileSpecialistsSub.classList.toggle("is-open", willOpen);
                mobileSpecialistsBtn.classList.toggle("is-open", willOpen);
                mobileSpecialistsBtn.setAttribute("aria-expanded", String(willOpen));
            });
        }

        // Close drawer on link click
        if (mobileDrawer) {
            mobileDrawer.querySelectorAll("a[href]").forEach(function (link) {
                link.addEventListener("click", function () {
                    setMobileDrawer(false);
                });
            });
        }

        // --- Language Toggle Sync (Desktop & Mobile) ---
        function syncLangButtons(lang) {
            document.querySelectorAll(".ra-lang-btn, .ra-mobile-lang-btn").forEach(function (btn) {
                btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
            });
            if (window.raI18n && typeof window.raI18n.switchLanguage === "function") {
                window.raI18n.switchLanguage(lang);
            }
        }

        document.querySelectorAll(".ra-lang-btn, .ra-mobile-lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function (event) {
                event.preventDefault();
                var lang = btn.getAttribute("data-lang");
                if (lang) syncLangButtons(lang);
            });
        });

        // Global Dismiss on outside click & Escape key
        document.addEventListener("click", function (event) {
            if (!header.contains(event.target) && (!mobileDrawer || !mobileDrawer.contains(event.target))) {
                closeMegaMenu();
                setMobileDrawer(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMegaMenu();
                setMobileDrawer(false);
            }
        });

        return true;
    }

    function initLegacyHeader() {
        var header = document.getElementById("Header");
        if (!header) return;

        var menu = header.querySelector("#HeaderPOP");
        var menuButton = header.querySelector(".MenuIcon");
        var dropdowns = header.querySelectorAll(".dropdown");

        function closeDropdowns(except) {
            dropdowns.forEach(function (dropdown) {
                if (dropdown !== except) dropdown.classList.remove("is-open");
            });
        }

        if (menuButton && menu) {
            menuButton.addEventListener("click", function () {
                var open = !menu.classList.contains("is-open");
                menu.classList.toggle("is-open", open);
                menuButton.classList.toggle("is-open", open);
            });
        }

        dropdowns.forEach(function (dropdown) {
            var toggle = dropdown.querySelector(".dropdown-toggle");
            if (!toggle) return;
            toggle.addEventListener("click", function (event) {
                event.preventDefault();
                var willOpen = !dropdown.classList.contains("is-open");
                closeDropdowns(dropdown);
                dropdown.classList.toggle("is-open", willOpen);
            });
        });
    }

    function initDualTextRoll() {
        var targets = document.querySelectorAll(".ra-nav-link, .ra-dropdown-trigger, .wh-footer-links a");
        targets.forEach(function (el) {
            if (el.querySelector(".ra-roll-box")) return;
            var arrow = el.querySelector(".ra-dropdown-arrow, .ra-explore-arrow, .ra-btn-arrow");
            var arrowHTML = arrow ? arrow.outerHTML : "";
            if (arrow) arrow.remove();
            var text = el.textContent.trim();
            if (!text) return;
            el.innerHTML = '<span class="ra-roll-box"><span class="ra-roll-top">' + text + '</span><span class="ra-roll-bottom">' + text + '</span></span>' + (arrowHTML ? " " + arrowHTML : "");
        });
    }

    function initWhatsAppFloat() {
        if (document.getElementById("raWhatsAppFloat") || document.querySelector(".ra-whatsapp-float")) return;
        
        var waAnchor = document.createElement("a");
        waAnchor.id = "raWhatsAppFloat";
        waAnchor.className = "ra-whatsapp-float";
        waAnchor.href = "https://api.whatsapp.com/send?phone=919290000571&text=Hello%20Dr.%20Raju%20AYUSH%20Hospital,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.";
        waAnchor.target = "_blank";
        waAnchor.rel = "noopener noreferrer";
        waAnchor.setAttribute("aria-label", "Chat with us on WhatsApp");

        waAnchor.innerHTML = [
            '<div class="ra-whatsapp-btn">',
            '  <svg viewBox="0 0 24 24">',
            '    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>',
            '  </svg>',
            '</div>',
            '<span class="ra-whatsapp-label">',
            '  <span class="ra-wa-online-dot"></span>',
            '  <span class="ra-wa-text" data-i18n="wa.chat">Chat on WhatsApp</span>',
            '</span>'
        ].join("");

        function updateWaLang(lang) {
            var textEl = waAnchor.querySelector(".ra-wa-text");
            if (textEl) {
                textEl.textContent = (lang === "tl") ? "వాట్సాప్‌లో చాట్ చేయండి" : "Chat on WhatsApp";
            }
        }

        window.addEventListener("ra-language-changed", function (e) {
            updateWaLang(e.detail.lang);
        });

        updateWaLang(localStorage.getItem("ra-lang") || "en");

        document.body.appendChild(waAnchor);
    }

    function init() {
        ensureFonts();
        initDualTextRoll();
        initWhatsAppFloat();
        if (!initSiteHeader()) initLegacyHeader();
    }

    window.initDualTextRoll = initDualTextRoll;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
