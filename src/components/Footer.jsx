import { useState } from "react";

const FOOTER_LINKS = {
  Explore: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Technical Stats", href: "#stats" },
    { label: "Quality & Certifications", href: "#quality" },
    { label: "Careers", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("#") || href === "#") return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Hook this up to your mailing list provider / backend endpoint
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="footer__brand">
          <img src="./assets/logo.png" alt="BAMS Logo" className="footer__logo" />
          <p>
            Crafting intelligent solutions that turn your engineering
            ideas into reality — from PCB design to full-scale production.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Email">✉</a>
          </div>
        </div>

        <div className="footer__links">
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div className="footer__link-group" key={group}>
              <h4>{group}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__newsletter">
          <h4>Stay up to date</h4>
          <p>
            Sign up to get the latest updates on our engineering services
            and manufacturing capabilities.
          </p>
          <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="footer__newsletter-submit">
              Submit ↗
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Bharyat — Advanced Manufacturing Services.</p>
      </div>
    </footer>
  );
};

export default Footer;
