import { useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// 1) Static content for the info column.
//    Only edit the `value` (and phone/whatsapp numbers below) — everything
//    else (layout, icons wrapper, hover states) is driven by the CSS.
const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Facility Address",
    value: "Plot No. __, Industrial Area, Delhi, India",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 98765 00000",
    href: "tel:+919876500000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@yourcompany.com",
    href: "mailto:info@yourcompany.com",
  },
  {
    icon: "🕒",
    label: "Working Hours",
    value: "Mon – Sat, 9:30 AM – 6:30 PM",
  },
];

// Small trust badges under the quick-action buttons — purely decorative,
// but they also balance the info column height against the form panel.
const TRUST_STATS = [
  { icon: "⚡", label: "24h Response Time" },
  { icon: "🔒", label: "NDA on Request" },
  { icon: "🛠️", label: "Prototype to Volume" },
];

// 2) Tiny validator, no external library needed.
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const INITIAL_FORM = { name: "", email: "", phone: "", company: "", message: "" };

const Contact = () => {
  // Reuses the same IntersectionObserver hook Intro.jsx / Quality.jsx use,
  // so anything with the "contact__reveal" class fades/slides in on scroll.
  const containerRef = useRef(null);
  useScrollReveal(containerRef, ".contact__reveal");

  // ---- Form state ----
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  // One generic change handler for every input/textarea. It reads the
  // `name` attribute of whichever field fired the event and updates just
  // that key in formData — so we don't need a handler per field.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) next.email = "Please enter your email.";
    else if (!isValidEmail(formData.email)) next.email = "Enter a valid email address.";
    if (!formData.message.trim()) next.message = "Tell us a little about your project.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // TODO: replace this simulated delay with a real request, e.g.:
    // fetch("https://formspree.io/f/xxxxxxx", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    setTimeout(() => {
      setStatus("success");
      setFormData(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section className="contact" id="contact" ref={containerRef}>
      {/* Decorative glow blob + floating orbs — purely visual background motion */}
      <div className="contact__glow"></div>
      <div className="contact__orb contact__orb--1"></div>
      <div className="contact__orb contact__orb--2"></div>

      {/* Faint animated circuit-trace texture across the whole section —
          echoes the panel's PCB pattern at very low opacity so the section
          background feels intentional rather than empty. Purely visual. */}
      <svg className="contact__bg-circuit" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
        <path className="circuit__trace" d="M0,80 H180 V30 H420 V90" />
        <path className="circuit__trace" d="M1000,400 H760 V460 H520 V410" />
        <path className="circuit__trace circuit__trace--flow" d="M0,80 H180 V30 H420 V90 H700" />
        <circle className="circuit__via" cx="180" cy="80" r="4" />
        <circle className="circuit__via" cx="180" cy="30" r="3" />
        <circle className="circuit__via" cx="420" cy="30" r="4" />
        <circle className="circuit__via" cx="760" cy="400" r="3" />
        <circle className="circuit__via" cx="520" cy="460" r="4" />
      </svg>

      <div className="contact__container">
        {/* Info column comes first in the JSX (matches the natural reading
            order: eyebrow -> heading -> lead -> address/phone/email/hours ->
            buttons -> badges), and the form panel comes second. On desktop
            the grid places info on the LEFT and the form on the RIGHT; on
            mobile it just stacks in this same order. Everything on the left
            — heading, lead paragraph, list, buttons, badges — now lives
            inside the SAME .contact__info container, so it all shares one
            column width instead of the heading/lead spanning the full
            section width above the grid. */}
        <div className="contact__grid">
          {/* ================= INFO COLUMN ================= */}
          <div className="contact__info">
            <span className="contact__eyebrow contact__reveal">Get In Touch</span>
            <h2 className="contact__heading contact__reveal">
              Let's Build Your Next <em>Product</em> Together
            </h2>
            <p className="contact__lead contact__reveal">
              Share your BOM, drawings, or a quick brief of what you're building —
              our team will get back to you with a quote and lead time within one
              business day.
            </p>

            {/* Each <li> carries its own "contact__reveal" class (instead of
                one wrapper), so the scroll-reveal hook staggers them in
                one-by-one rather than the whole list fading in together. */}
            <ul className="contact__info-list">
              {CONTACT_DETAILS.map((item) => (
                <li className="contact__info-item contact__reveal" key={item.label}>
                  <span className="contact__info-icon">{item.icon}</span>
                  <div className="contact__info-text">
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a className="contact__info-value contact__info-link" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__quick-actions contact__reveal">
              <a href="tel:+919876500000" className="navbar__btn contact__quick-btn">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919876500000"
                target="_blank"
                rel="noreferrer"
                className="contact__quick-btn contact__quick-btn--outline"
              >
                🟢 WhatsApp Us
              </a>
            </div>

            {/* Trust badges — fills the empty space under the buttons and
                doubles as quick reassurance copy. */}
            <ul className="contact__trust">
              {TRUST_STATS.map((stat) => (
                <li className="contact__trust-item contact__reveal" key={stat.label}>
                  <span>{stat.icon}</span> {stat.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= FORM PANEL ================= */}
          {/* The dark card itself is NOT a reveal target (it should just be
              there, framing the form) — only its rows/fields/button are, so
              they cascade in individually once the card is on screen. */}
          <div className="contact__panel">
            {/* Decorative animated PCB-trace background — fills the empty
                space above/below the (shorter) form so the tall panel never
                looks like dead black space. Purely visual, aria-hidden. */}
            <svg
              className="contact__panel-circuit"
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className="circuit__trace" d="M0,60 H90 V20 H260" />
              <path className="circuit__trace" d="M400,120 H320 V180 H210 V230" />
              <path className="circuit__trace" d="M0,340 H70 V400 H180 V440 H400" />
              <path className="circuit__trace" d="M330,500 V430 H260 V380" />
              <path className="circuit__trace circuit__trace--flow" d="M0,60 H90 V20 H260 V80 H400" />

              <circle className="circuit__via" cx="90" cy="60" r="4" />
              <circle className="circuit__via" cx="90" cy="20" r="3" />
              <circle className="circuit__via" cx="260" cy="20" r="4" />
              <circle className="circuit__via" cx="320" cy="120" r="3" />
              <circle className="circuit__via" cx="210" cy="180" r="4" />
              <circle className="circuit__via" cx="70" cy="340" r="3" />
              <circle className="circuit__via" cx="180" cy="400" r="4" />
              <circle className="circuit__via" cx="260" cy="380" r="3" />

              <rect className="circuit__chip" x="255" y="6" width="26" height="26" rx="3" />
              <rect className="circuit__chip" x="160" y="388" width="30" height="24" rx="3" />

              <circle className="circuit__pulse" r="3.2">
                <animateMotion
                  path="M0,60 H90 V20 H260 V80 H400"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row contact__reveal">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "contact__input--error" : ""}
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__row contact__reveal">
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "contact__input--error" : ""}
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__field contact__reveal">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Board type, volumes, timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "contact__input--error" : ""}
                ></textarea>
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="contact__submit contact__reveal"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    Sending
                    <span className="contact__dots" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <p className="contact__success" role="status">
                  ✅ Thanks! Your message has been sent — we'll be in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;