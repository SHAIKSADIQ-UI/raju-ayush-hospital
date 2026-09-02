/**
 * WH Healthcare — New Sections JavaScript
 * GSAP Animations, FAQ Accordion, Disease Filter, Before/After Slider
 */
(function () {
    'use strict';

    // Wait for DOM ready
    function init() {
        initCounterAnimation();
        initCredentialReveal();
        initDiseaseFilter();
        initBenefitReveal();
        initTreatmentTimeline();
        initBeforeAfterSliders();
        initFaqAccordion();
        initSectionReveals();
    }

    // =====================================================
    // 1. STATS COUNTER ANIMATION
    // =====================================================
    function initCounterAnimation() {
        const statNumbers = document.querySelectorAll('.ns-stat-number');
        if (!statNumbers.length) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const statsSection = document.querySelector('.ns-stats');
        if (statsSection) observer.observe(statsSection);
    }

    function animateCounters() {
        document.querySelectorAll('.ns-stat-number').forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var suffix = el.getAttribute('data-suffix') || '';
            var prefix = el.getAttribute('data-prefix') || '';
            var duration = 2000;
            var startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                // Ease out cubic
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = Math.floor(eased * target);
                el.textContent = prefix + current.toLocaleString() + suffix;

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = prefix + target.toLocaleString() + suffix;
                    el.closest('.ns-stat-card').classList.add('completed');
                }
            }
            requestAnimationFrame(step);
        });
    }

    // =====================================================
    // 2. DOCTOR CREDENTIAL REVEAL
    // =====================================================
    function initCredentialReveal() {
        var credentials = document.querySelectorAll('.ns-credential-item');
        if (!credentials.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var items = entry.target.querySelectorAll('.ns-credential-item');
                    items.forEach(function (item, index) {
                        setTimeout(function () {
                            item.classList.add('revealed');
                        }, index * 150);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        var doctorSection = document.querySelector('.ns-doctor-credentials');
        if (doctorSection) observer.observe(doctorSection);
    }

    // =====================================================
    // 3. DISEASE FILTER & SEARCH
    // =====================================================
    function initDiseaseFilter() {
        var filterBtns = document.querySelectorAll('.ns-disease-filter-btn');
        var searchInput = document.querySelector('#disease-search');
        var cards = document.querySelectorAll('.ns-disease-card');

        if (!cards.length) return;

        // Filter buttons
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                var category = btn.getAttribute('data-category');
                filterCards(category, searchInput ? searchInput.value : '');
            });
        });

        // Search input
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                var activeBtn = document.querySelector('.ns-disease-filter-btn.active');
                var category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
                filterCards(category, searchInput.value);
            });
        }

        function filterCards(category, search) {
            var term = (search || '').toLowerCase().trim();
            cards.forEach(function (card) {
                var cardCat = card.getAttribute('data-category');
                var cardName = card.getAttribute('data-name').toLowerCase();
                var catMatch = category === 'all' || cardCat === category;
                var searchMatch = !term || cardName.indexOf(term) > -1;
                if (catMatch && searchMatch) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    }

    // =====================================================
    // 4. WHY CHOOSE US - BENEFIT REVEAL
    // =====================================================
    function initBenefitReveal() {
        var benefits = document.querySelectorAll('.ns-benefit-item');
        if (!benefits.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

        benefits.forEach(function (item) {
            observer.observe(item);
        });
    }

    // =====================================================
    // 5. TREATMENT TIMELINE HORIZONTAL SCROLL
    // =====================================================
    function initTreatmentTimeline() {
        var timeline = document.querySelector('.ns-treatment-timeline');
        if (!timeline) return;

        // Enable horizontal scroll with mouse wheel
        timeline.addEventListener('wheel', function (e) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                timeline.scrollLeft += e.deltaY;
            }
        }, { passive: false });

        // GSAP stagger reveal for steps
        var steps = document.querySelectorAll('.ns-treatment-step');
        if (steps.length && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(steps, {
                scrollTrigger: {
                    trigger: '.ns-treatment',
                    start: 'top 80%',
                    once: true
                },
                opacity: 0,
                x: 60,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out'
            });
        }
    }

    // =====================================================
    // 6. BEFORE/AFTER SLIDERS
    // =====================================================
    function initBeforeAfterSliders() {
        document.querySelectorAll('.ns-before-after').forEach(function (container) {
            var divider = container.querySelector('.ns-ba-divider');
            var afterLayer = container.querySelector('.ns-ba-after');
            if (!divider || !afterLayer) return;

            var isDragging = false;

            function updateSlider(clientX) {
                var rect = container.getBoundingClientRect();
                var x = clientX - rect.left;
                var pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
                divider.style.left = pct + '%';
                afterLayer.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
            }

            divider.addEventListener('mousedown', function () { isDragging = true; });
            container.addEventListener('mousedown', function () { isDragging = true; });

            document.addEventListener('mousemove', function (e) {
                if (isDragging) {
                    e.preventDefault();
                    updateSlider(e.clientX);
                }
            });

            document.addEventListener('mouseup', function () { isDragging = false; });

            // Touch support
            divider.addEventListener('touchstart', function () { isDragging = true; }, { passive: true });
            container.addEventListener('touchmove', function (e) {
                if (isDragging && e.touches[0]) {
                    updateSlider(e.touches[0].clientX);
                }
            }, { passive: true });
            document.addEventListener('touchend', function () { isDragging = false; });
        });
    }

    // =====================================================
    // 7. FAQ ACCORDION
    // =====================================================
    function initFaqAccordion() {
        var faqItems = document.querySelectorAll('.ns-faq-item');
        if (!faqItems.length) return;

        faqItems.forEach(function (item) {
            var question = item.querySelector('.ns-faq-question');
            var answer = item.querySelector('.ns-faq-answer');
            var answerContent = item.querySelector('.ns-faq-answer-content');

            if (!question || !answer) return;

            question.addEventListener('click', function () {
                var isOpen = item.classList.contains('active');

                // Close all
                faqItems.forEach(function (other) {
                    other.classList.remove('active');
                    var otherAnswer = other.querySelector('.ns-faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = '0';
                });

                // Toggle current
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answerContent.scrollHeight + 24 + 'px';
                }
            });
        });
    }

    // =====================================================
    // 8. GENERAL SECTION REVEAL ANIMATIONS
    // =====================================================
    function initSectionReveals() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            // Fallback: just show everything
            return;
        }

        // Stats cards stagger
        var statCards = gsap.utils.toArray('.ns-stat-card');
        if (statCards.length) {
            gsap.from(statCards, {
                scrollTrigger: { trigger: '.ns-stats', start: 'top 80%', once: true },
                y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out'
            });
        }

        // Doctor photo parallax
        var doctorPhoto = document.querySelector('.ns-doctor-photo-wrap');
        if (doctorPhoto) {
            gsap.from(doctorPhoto, {
                scrollTrigger: { trigger: '.ns-doctor', start: 'top 80%', once: true },
                y: 60, opacity: 0, duration: 1, ease: 'power2.out'
            });
        }

        // Doctor name split text
        var doctorName = document.querySelector('.ns-doctor-name');
        if (doctorName) {
            gsap.from(doctorName, {
                scrollTrigger: { trigger: '.ns-doctor', start: 'top 75%', once: true },
                y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out'
            });
        }

        // Disease cards stagger
        var diseaseCards = gsap.utils.toArray('.ns-disease-card');
        if (diseaseCards.length) {
            gsap.from(diseaseCards, {
                scrollTrigger: { trigger: '.ns-diseases', start: 'top 75%', once: true },
                y: 40, opacity: 0, stagger: 0.04, duration: 0.6, ease: 'power2.out'
            });
        }

        // Why us image parallax
        var whyUsImg = document.querySelector('.ns-why-us-visual');
        if (whyUsImg) {
            gsap.to(whyUsImg, {
                scrollTrigger: {
                    trigger: '.ns-why-us',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5
                },
                y: -40,
                ease: 'none'
            });
        }

        // Success stories stagger
        var storyCards = gsap.utils.toArray('.ns-story-card');
        if (storyCards.length) {
            gsap.from(storyCards, {
                scrollTrigger: { trigger: '.ns-success', start: 'top 80%', once: true },
                y: 40, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out'
            });
        }

        // FAQ items stagger
        var faqItems = gsap.utils.toArray('.ns-faq-item');
        if (faqItems.length) {
            gsap.from(faqItems, {
                scrollTrigger: { trigger: '.ns-faq', start: 'top 80%', once: true },
                y: 30, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out'
            });
        }

        // Contact cards slide in
        var contactCards = gsap.utils.toArray('.ns-contact-card');
        if (contactCards.length) {
            gsap.from(contactCards, {
                scrollTrigger: { trigger: '.ns-contact', start: 'top 80%', once: true },
                x: -40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out'
            });
        }

        // Contact map fade in
        var contactMap = document.querySelector('.ns-contact-map');
        if (contactMap) {
            gsap.from(contactMap, {
                scrollTrigger: { trigger: '.ns-contact', start: 'top 75%', once: true },
                scale: 0.95, opacity: 0, duration: 1, ease: 'power2.out'
            });
        }

        // Blog cards stagger
        var blogCards = gsap.utils.toArray('.ns-blog-card');
        if (blogCards.length) {
            gsap.from(blogCards, {
                scrollTrigger: { trigger: '.ns-blog', start: 'top 80%', once: true },
                y: 50, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out'
            });
        }

        // Partners fade in
        var partnersTrack = document.querySelector('.ns-partners-track');
        if (partnersTrack) {
            gsap.from(partnersTrack, {
                scrollTrigger: { trigger: '.ns-partners', start: 'top 90%', once: true },
                opacity: 0, duration: 1, ease: 'power2.out'
            });
        }
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
