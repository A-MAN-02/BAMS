import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Official GSAP fix for smooth/momentum scrolling (browser CSS,
// trackpad inertia, mobile) fighting ScrollTrigger's pin + scrub.
// Safe to call multiple times / on remount — it just re-applies.
ScrollTrigger.normalizeScroll(true);

const Hero = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // gsap.context scopes selectors + makes cleanup on unmount trivial —
    // everything below this line is a 1:1 match of the original script.js
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          // IMPORTANT: pass the actual DOM node here, not the string
          // ".hero-wrapper". gsap.context() scopes selector text to
          // *descendants* of wrapperRef.current (it runs
          // wrapperRef.current.querySelectorAll(...) under the hood) —
          // and a node's own class is never matched by its own
          // querySelectorAll(). Since wrapperRef IS the .hero-wrapper
          // element, the string selector silently resolved to nothing,
          // so ScrollTrigger had no real element to pin/measure and the
          // page just scrolled straight through instead of holding.
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      heroTimeline
        // Step 1: Video zoom in
        .to(".zoom-video", { scale: 4, ease: "none", duration: 1 }, 0)
        // Background image blur as you scroll
        .to(".hero-bg", { filter: "blur(15px)", ease: "none", duration: 1 }, 0)
        // Old text fades out early in the scroll
        .to(".old-text", { opacity: 0, y: -50, ease: "none", duration: 0.4 }, 0)
        // New text + button fade in once old text is gone
        .fromTo(
          ".new-text",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.5 },
          0.5
        );
    }, wrapperRef);

    // React 18 StrictMode runs this effect twice in dev (setup → cleanup →
    // setup again), which can leave ScrollTrigger's pin-distance metrics
    // slightly off from a mid-cycle DOM state. A refresh a couple of frames
    // after mount — well before the user can realistically start
    // scrolling — corrects this without touching anything after that.
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert(); // kills timeline + ScrollTrigger on unmount
    };
  }, []);

  return (
    <section className="hero-wrapper" id="hero" ref={wrapperRef}>
      {/* Old text (shown first) */}
      <div className="hero-content old-text">
        <h1>Precision NPI Manufacturing</h1>
        <p>Engineering Your Ideas into Production.</p>
      </div>

      {/* New text (revealed on scroll) */}
      <div className="hero-content new-text">
        <h1>ELECTRONICS MANUFACTURING SERVICES</h1>
        <p>From Prototype to Production</p>
        <a href="#contact" className="navbar__btn">
          Work With Us
        </a>
      </div>

      {/* Background layer */}
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('./assets/bg-image.jpg')" }}
      ></div>

      {/* Foreground zoom video */}
      <div className="hero-front">
        <video className="zoom-video" autoPlay loop muted playsInline>
          <source src="./assets/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
