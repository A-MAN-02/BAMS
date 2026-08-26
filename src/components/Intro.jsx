import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROCESS_STEPS = [
  { index: "01", label: "PCB Design" },
  { index: "02", label: "SMT Assembly" },
  { index: "03", label: "Test & Inspection" },
  { index: "04", label: "BGA Rework" },
  { index: "05", label: "Volume Scale" },
];

const INDUSTRIES = ["Medical", "Railway", "Automotive", "Industrial Electronics"];

const Intro = () => {
  const containerRef = useRef(null);
  useScrollReveal(containerRef, ".intro__reveal");

  return (
    <section className="intro" id="about" ref={containerRef}>
      <div className="intro__glow"></div>

      <div className="intro__container">
        <div className="intro__top">
          {/* Text Content */}
          <div className="intro__content">
            <span className="intro__eyebrow intro__reveal">Who We Are</span>

            <h2 className="intro__heading intro__reveal">
              From Design Intent to <em>Field-Ready Hardware</em>
            </h2>

            <p className="intro__lead intro__reveal">
              We deliver end-to-end{" "}
              <span className="intro__highlight">
                Electronic Design and Manufacturing
              </span>{" "}
              services spanning the complete product lifecycle — from{" "}
              <span className="intro__highlight">PCB design</span> and{" "}
              <span className="intro__highlight">fine-pitch SMT assembly</span> to
              rigorous testing,{" "}
              <span className="intro__highlight">X-ray / AOI inspection</span>,
              and <span className="intro__highlight">BGA rework</span>. Our
              fully and semi-automatic SMT lines, paired with dedicated
              pre-production storage and baking facilities, let us hold tight
              tolerances while scaling smoothly from prototype to volume
              production — with the agility and technical depth to support
              both fast-moving startups and established enterprises.
            </p>

            {/* Industries Trusted Across */}
            <div className="intro__industries intro__reveal">
              <span className="intro__industries-label">
                Trusted by clients across
              </span>
              <div className="intro__pills">
                {INDUSTRIES.map((industry) => (
                  <span className="intro__pill" key={industry}>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Facility / Machine Photo */}
          <div className="intro__media intro__reveal">
            <img
              src="./assets/intro-facility.jpeg"
              alt="BAMS SMT production line"
              className="intro__image"
            />
          </div>
        </div>

        {/* Production Lifecycle Rail */}
        <div className="intro__process intro__reveal">
          {PROCESS_STEPS.map((step) => (
            <div className="intro__step" key={step.index}>
              <span className="intro__step-index">{step.index}</span>
              <span className="intro__step-label">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
