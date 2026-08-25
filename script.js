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

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

/* =====================================
   NAVBAR SCROLL EFFECT (Updated)
===================================== */
let lastScrollPosition = 0; // Pichla scroll position track karne ke liye

const handleNavbarScroll = () => {
    let currentScrollPosition = window.scrollY;

    // --- 1. Background Blur & Shadow Logic (Aapka purana code) ---
    if (currentScrollPosition > 20) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }

    // --- 2. Hide / Show Navbar Logic (Naya code) ---
    // Agar hum niche scroll kar rahe hain (current > last) aur top se 100px niche hain
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        navbar.classList.add("navbar--hidden"); // Navbar ko hide karo
    } 
    // Agar hum upar scroll kar rahe hain (current < last)
    else {
        navbar.classList.remove("navbar--hidden"); // Navbar ko show karo
    }

    // Current position ko agle check ke liye save kar lo
    lastScrollPosition = currentScrollPosition;
};

window.addEventListener("scroll", handleNavbarScroll, {
    passive: true
});

// Check initial page position
handleNavbarScroll();

/* =====================================
   BAMS INTRO — SCROLL REVEAL
===================================== */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(".intro__reveal, .quality__reveal");

if (revealTargets.length && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Small stagger so each block eases in one after another
                    setTimeout(() => {
                        entry.target.classList.add("is-visible");
                    }, i * 90);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
}

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

    // NAYA STEP: Background image ko scroll ke sath blur karna
    .to(".hero-bg", {
        filter: "blur(15px)", /* Aap 15px ko kam ya zyada kar sakte hain apne hisaab se */
        ease: "none",
        duration: 1
    }, 0) /* '0' ka matlab hai ye video zoom ke sath hi start hoga */
    
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