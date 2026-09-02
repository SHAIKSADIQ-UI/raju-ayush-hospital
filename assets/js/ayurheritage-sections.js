/**
 * AYURHERITAGE SECTIONS JAVASCRIPT
 * Testimonial Slider, FAQ Accordion, Contact Form, Mouse Parallax & ScrollTrigger Animations
 */
(function () {
    'use strict';

    function initAll() {
        initTestimonialSlider();
        initFaqAccordion();
        initContactForm();
        initContactParallax();
        initScrollTriggerAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // =========================================================
    // 1. GSAP SCROLLTRIGGER ANIMATIONS (Forward & Backward Scroll)
    // =========================================================
    function initScrollTriggerAnimations() {
        if (typeof gsap === 'undefined') return;

        // Register ScrollTrigger if present
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // A. TESTIMONIALS SECTION (Fade Up on scroll down, disappear on scroll up)
        var testiSec = document.querySelector('#testimonialSec');
        if (testiSec && typeof ScrollTrigger !== 'undefined') {
            // Heading & Subtitle
            gsap.fromTo('#testimonialSec .heDSc', 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#testimonialSec',
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );

            // Testimonial Green Card & Nav
            gsap.fromTo('#testimonialSec .testiSlide-wrapper',
                { y: 70, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '#testimonialSec',
                        start: 'top 78%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );
        }

        // B. CONTACT SECTION (Left image fades in from left, reverses on scroll backward)
        var contactSec = document.querySelector('#contactSec');
        if (contactSec && typeof ScrollTrigger !== 'undefined') {
            // Left artwork: comes from left (-100px) and fades in; reverses on scroll up
            gsap.fromTo('#contactSec .lftBx',
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '#contactSec',
                        start: 'top 78%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );

            // Right form: comes from right (+80px) and fades in; reverses on scroll up
            gsap.fromTo('#contactSec .ritBx',
                { x: 80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '#contactSec',
                        start: 'top 78%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );
        }

        // C. FAQ SECTION (Accordion items stagger in from bottom; reverse on scroll up)
        var faqSec = document.querySelector('#faqSec');
        if (faqSec && typeof ScrollTrigger !== 'undefined') {
            // FAQ Heading
            gsap.fromTo('#faqSec .Headbx',
                { y: 45, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#faqSec',
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );

            // Stagger Accordion items
            gsap.fromTo('#faqSec .accordion-item',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#faqSec .ayur-accordion',
                        start: 'top 80%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );
        }
    }

    // =========================================================
    // 2. TESTIMONIAL SLIDER
    // =========================================================
    function initTestimonialSlider() {
        var slider = document.querySelector('#testimonialSec .testiSlide');
        if (!slider) return;

        var items = slider.querySelectorAll('.item');
        var prevBtn = document.querySelector('#testimonialSec .prev-btn');
        var nextBtn = document.querySelector('#testimonialSec .next-btn');
        var dotsContainer = document.querySelector('#testimonialSec .ayur-testi-dots');

        if (!items.length) return;

        var currentIndex = 0;
        var autoPlayTimer = null;
        var autoPlayInterval = 5000;

        // Build dots
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            items.forEach(function (_, i) {
                var dot = document.createElement('button');
                dot.type = 'button';
                dot.setAttribute('aria-label', 'Slide ' + (i + 1));
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', function () {
                    goToSlide(i);
                    resetAutoPlay();
                });
                dotsContainer.appendChild(dot);
            });
        }

        var dots = dotsContainer ? dotsContainer.querySelectorAll('button') : [];

        function showSlide(index, direction) {
            items.forEach(function (item, i) {
                if (i === index) {
                    item.classList.add('active');
                    item.style.display = 'block';
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(item, 
                            { opacity: 0, scale: 0.96, y: 15 }, 
                            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                        );
                    }
                } else {
                    item.classList.remove('active');
                    item.style.display = 'none';
                }
            });

            dots.forEach(function (dot, i) {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            currentIndex = index;
        }

        function nextSlide() {
            var next = (currentIndex + 1) % items.length;
            showSlide(next, 'next');
        }

        function prevSlide() {
            var prev = (currentIndex - 1 + items.length) % items.length;
            showSlide(prev, 'prev');
        }

        function goToSlide(index) {
            showSlide(index);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.preventDefault();
                nextSlide();
                resetAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                prevSlide();
                resetAutoPlay();
            });
        }

        // Auto Play
        function startAutoPlay() {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        var sliderWrapper = document.querySelector('#testimonialSec .testiSlide-wrapper');
        if (sliderWrapper) {
            sliderWrapper.addEventListener('mouseenter', stopAutoPlay);
            sliderWrapper.addEventListener('mouseleave', startAutoPlay);

            // Touch Swipe Support
            var touchStartX = 0;
            var touchEndX = 0;

            sliderWrapper.addEventListener('touchstart', function (e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            sliderWrapper.addEventListener('touchend', function (e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                if (touchEndX < touchStartX - 40) {
                    nextSlide();
                    resetAutoPlay();
                }
                if (touchEndX > touchStartX + 40) {
                    prevSlide();
                    resetAutoPlay();
                }
            }
        }

        // Initialize first slide & autoplay
        showSlide(0);
        startAutoPlay();
    }

    // =========================================================
    // 3. FAQ ACCORDION
    // =========================================================
    function initFaqAccordion() {
        var accordion = document.querySelector('#faqSec .ayur-accordion');
        if (!accordion) return;

        var items = accordion.querySelectorAll('.accordion-item');

        items.forEach(function (item) {
            var btn = item.querySelector('.accordion-button');
            if (!btn) return;

            btn.addEventListener('click', function () {
                var isActive = item.classList.contains('active');

                // Close other items
                items.forEach(function (other) {
                    if (other !== item) {
                        other.classList.remove('active');
                        var otherIcon = other.querySelector('.toggle-icon');
                        if (otherIcon) otherIcon.textContent = '+';
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    var icon = item.querySelector('.toggle-icon');
                    if (icon) icon.textContent = '+';
                } else {
                    item.classList.add('active');
                    var icon = item.querySelector('.toggle-icon');
                    if (icon) icon.textContent = '-';
                }
            });
        });
    }

    // =========================================================
    // 4. CONTACT FORM
    // =========================================================
    function initContactForm() {
        var form = document.querySelector('#contactSec .contact-form') || document.querySelector('.contact-form');
        if (!form) return;

        // Number only filter for phone input
        var phoneInput = form.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('keypress', function (e) {
                var charCode = e.which ? e.which : e.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43 && charCode !== 45 && charCode !== 32) {
                    e.preventDefault();
                }
            });
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = (form.querySelector('#name') || {}).value || '';
            var email = (form.querySelector('#email') || {}).value || '';
            var phone = (form.querySelector('#phone') || {}).value || '';
            var gender = (form.querySelector('#gender') || {}).value || '';
            var date = (form.querySelector('#tdate') || {}).value || '';
            var timeVal = (form.querySelector('#timepicker') || {}).value || '';
            var message = (form.querySelector('#message') || {}).value || '';

            var submitBtn = form.querySelector('.getApnt') || form.querySelector('button[type="submit"]');
            var msgContainer = form.querySelector('.bookemsg');

            if (submitBtn) {
                var originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span>Connecting to WhatsApp...</span>';
                submitBtn.style.pointerEvents = 'none';

                var whatsappText = "*Appointment Booking Request - Raju AYUSH Hospital*\n\n" +
                    "👤 *Name:* " + name + "\n" +
                    "📞 *Phone:* " + phone + "\n" +
                    (email ? "📧 *Email:* " + email + "\n" : "") +
                    (gender ? "⚧ *Gender:* " + gender + "\n" : "") +
                    (date ? "📅 *Date:* " + date + "\n" : "") +
                    (timeVal ? "⏰ *Time:* " + timeVal + "\n" : "") +
                    (message ? "💬 *Message / Symptoms:* " + message + "\n" : "");

                var targetNumber = "919290000571";
                var whatsappUrl = "https://api.whatsapp.com/send?phone=" + targetNumber + "&text=" + encodeURIComponent(whatsappText);

                setTimeout(function () {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.pointerEvents = 'auto';

                    if (msgContainer) {
                        msgContainer.className = 'bookemsg success';
                        msgContainer.textContent = '✓ Thank you! Opening WhatsApp to connect with Raju AYUSH Hospital...';
                        setTimeout(function () {
                            msgContainer.textContent = '';
                        }, 6000);
                    }

                    // Open WhatsApp
                    window.open(whatsappUrl, '_blank');

                    form.reset();
                }, 800);
            }
        });
    }

    // =========================================================
    // 5. CONTACT IMAGE PARALLAX
    // =========================================================
    function initContactParallax() {
        var section = document.querySelector('#contactSec');
        var targetImg = document.querySelector('#contactSec .ltImg');

        if (!section || !targetImg) return;

        section.addEventListener('mousemove', function (e) {
            var rect = section.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            var moveX = (x - rect.width / 2) * -0.025;
            var moveY = (y - rect.height / 2) * -0.025;

            targetImg.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
        });

        section.addEventListener('mouseleave', function () {
            targetImg.style.transform = 'translate(0px, 0px)';
        });
    }
})();
