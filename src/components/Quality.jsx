import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CERTIFICATIONS = [
  { image: "cert-iso-9001.png", title: "ISO 9001", desc: "Quality Management" },
  { image: "cert-iso-13485.png", title: "ISO 13485", desc: "Medical Devices" },
  { image: "cert-iso-14001.png", title: "ISO 14001", desc: "Environmental" },
  { image: "cert-iatf-16949.png", title: "IATF 16949:2016", desc: "Automotive" },
];

const Quality = () => {
  const containerRef = useRef(null);
  useScrollReveal(containerRef, ".quality__reveal");

  return (
    <section className="quality" id="quality" ref={containerRef}>
      <div className="quality__container">
        <div className="quality__grid">
          {/* Left: Copy */}
          <div className="quality__content quality__reveal">
            <span className="quality__eyebrow">Quality Assurance</span>
            <h2 className="quality__heading">Built on Certified Quality Systems</h2>

            <p className="quality__text">
              Quality and process discipline are embedded throughout our
              manufacturing workflow — from incoming component inspection and
              PCB assembly to testing, traceability, final inspection, and
              product shipment.
            </p>
            <p className="quality__text">
              Our manufacturing processes operate under internationally
              recognized quality, environmental, medical, and automotive
              standards. Defined process controls, documented procedures,
              inspection checkpoints, and continuous improvement practices
              help us deliver consistent quality across prototype, NPI, and
              production builds.
            </p>
            <p className="quality__text">
              Whether supporting industrial electronics, medical devices,
              automotive systems, or high-reliability products, our focus
              remains the same:{" "}
              <strong>
                repeatable manufacturing, complete traceability, regulatory
                compliance, and dependable product quality.
              </strong>
            </p>

            {/* Interactive quick-stat row */}
            <div className="quality__meta">
              <div className="quality__meta-item">
                <span className="quality__meta-number">4</span>
                <span className="quality__meta-label">Certifications Held</span>
              </div>
              <div className="quality__meta-divider"></div>
              <div className="quality__meta-item">
                <span className="quality__meta-number">100%</span>
                <span className="quality__meta-label">Process Traceability</span>
              </div>
            </div>
          </div>

          {/* Right: Certification Panel */}
          <div className="quality__panel quality__reveal">
            <span className="quality__panel-label">Industry Certifications</span>

            <div className="quality__badges">
              {CERTIFICATIONS.map((cert) => (
                <div className="quality__badge" key={cert.title}>
                  <div className="quality__seal">
                    <img
                      src={`./assets/${cert.image}`}
                      alt={cert.title}
                      className="cert-img"
                    />
                  </div>
                  <h4>{cert.title}</h4>
                  <p>{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
