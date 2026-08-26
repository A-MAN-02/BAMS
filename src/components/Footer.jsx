const FOOTER_LINKS = {
  Capabilities: [
    { label: "PCB Design", href: "#capabilities" },
    { label: "SMT Assembly", href: "#capabilities" },
    { label: "Test & Inspection", href: "#capabilities" },
    { label: "BGA Rework", href: "#capabilities" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Quality & Certifications", href: "#quality" },
    { label: "Industries We Serve", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const Footer = () => {
  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("#") || href === "#") return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="footer__brand">
          <img src="/assets/logo.png" alt="BAMS Logo" className="footer__logo" />
          <p>
            End-to-end Electronic Design and Manufacturing — from PCB design
            and fine-pitch SMT assembly to testing, inspection, and volume
            production.
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
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} BAMS — Bharyat Advanced Manufacturing Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
