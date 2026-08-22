/* =====================================
   GET ELEMENTS
===================================== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar__link, .navbar__btn--mobile");

/* =====================================
   REUSABLE MENU FUNCTIONS
===================================== */
const openMenu = () => {
    navMenu.classList.add("navbar__menu--open");
    menuBtn.classList.add("navbar__toggle--active");
    menuBtn.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
    navMenu.classList.remove("navbar__menu--open");
    menuBtn.classList.remove("navbar__toggle--active");
    menuBtn.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
    const isOpen = navMenu.classList.contains("navbar__menu--open");
    isOpen ? closeMenu() : openMenu();
};

/* =====================================
   EVENT LISTENERS
===================================== */
menuBtn.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("navbar__menu--open")) {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && navMenu.classList.contains("navbar__menu--open")) {
        closeMenu();
    }
});

// Efficient Scroll Handling for Navbar Shadow
let isScrolling = false;
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 10) {
                navbar.classList.add("navbar--scrolled");
            } else {
                navbar.classList.remove("navbar--scrolled");
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

/* =====================================
   GSAP HERO ANIMATION
===================================== */
gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top", 
        end: "+=200%", 
        scrub: 1, 
        pin: true, 
    }
});

heroTimeline
    // Step 1: Video zoom in
    .to(".zoom-video", {   
        scale: 4,          
        ease: "none",
        duration: 1
    }, 0) 
    
    // Step 2: Old text fades out early in the scroll
    .to(".old-text", {
        opacity: 0, 
        y: -50, 
        ease: "none",
        duration: 0.4 
    }, 0) 
    
    // Step 3: New text and button fade in smoothly once old text is gone
    .fromTo(".new-text", 
        { autoAlpha: 0, y: 50 }, 
        { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.5 }, 
        0.5 
    );
    