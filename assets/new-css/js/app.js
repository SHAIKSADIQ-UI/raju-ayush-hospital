/* Raju AYUSH Hospital - Optimized UI Scripts */
document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById("Header") || document.getElementById("comp-mb7ogqrp") || document.querySelector("header");
    var sticky = 150;

    window.addEventListener('scroll', function() {
        if (header) {
            if (window.pageYOffset >= sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
        
        var scrollUp = document.querySelector(".scrollup");
        if (scrollUp) {
            if (window.pageYOffset > 800) {
                scrollUp.style.display = "flex";
            } else {
                scrollUp.style.display = "none";
            }
        }
    }, { passive: true });

    var scrollUpBtn = document.querySelector(".scrollup");
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
