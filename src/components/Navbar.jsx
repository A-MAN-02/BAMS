import { useEffect, useState } from "react";
import { useNavbarScroll } from "../hooks/useNavbarScroll";

const NAV_LINKS = [
  { href: "#home", label: "Home", active: true },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Models" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled, hidden } = useNavbarScroll();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handles smooth-scrolling to in-page anchors ourselves now, since the
  // global CSS `scroll-behavior: smooth` was removed (it conflicted with
  // GSAP ScrollTrigger's pin in Hero.jsx).
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Escape key + resize-above-breakpoint should close the mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        hidden ? "navbar--hidden" : ""
      }`}
      id="navbar"
    >
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleAnchorClick(e, "#home")}
        >
          <img src="./assets/logo.png" alt="Manufacture Logo" />
        </a>

        {/* Single Responsive Navigation */}
        <nav
          className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}
          id="navMenu"
          aria-label="Main Navigation"
        >
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => (
              <li className="navbar__item" key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${
                    link.active ? "navbar__link--active" : ""
                  }`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Mobile CTA inside list */}
            <li className="navbar__item navbar__item--mobile-only">
              <a
                href="#contact"
                className="navbar__btn navbar__btn--mobile"
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                Work With Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions (Desktop CTA + Mobile Toggle) */}
        <div className="navbar__actions">
          <a
            href="#contact"
            className="navbar__btn navbar__btn--desktop"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Work With Us
          </a>

          <button
            className={`navbar__toggle ${
              isOpen ? "navbar__toggle--active" : ""
            }`}
            id="menuBtn"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="navMenu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
