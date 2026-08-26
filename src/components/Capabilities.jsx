const CARDS = [
  {
    icon: "⚙️",
    title: "PCB Assembly",
    desc: "SMT | THT | Mixed Technology | Fine Pitch | BGA",
    image: "PCB.jpg",
  },
  {
    icon: "🚀",
    title: "NPI & Prototyping",
    desc: "DFM | Engineering Builds | Pilot Production | Ramp",
    image: "NPI.jpg",
  },
  {
    icon: "📦",
    title: "Box Build & Integration",
    desc: "PCBA | Mechanical | Cable | System Integration",
    image: "box_.jpeg",
  },
  {
    icon: "🔍",
    title: "Test & Quality",
    desc: "AOI | X-Ray | ICT | FCT | Burn-In",
    image: "Test.jpg",
  },
  {
    icon: "🏭",
    title: "Turnkey Manufacturing",
    desc: "BOM Procurement | Build-to-Spec | Traceability | Logistics",
    image: "Turnkey.jpg",
  },
  {
    icon: "🔗",
    title: "Supply Chain & Component Management",
    desc: "Sourcing | Inventory | Shortage Management | Global Procurement",
    image: "Supply.jpg",
  },
];

const cardBackground = (image) =>
  `linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.95) 100%), url('/assets/${image}') center/cover no-repeat`;

const Capabilities = () => {
  return (
    <section
      className="capabilities"
      id="capabilities"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(38, 125, 152, 0.6), rgba(237, 237, 237, 1))",
      }}
    >
      {/* Background Animated Icons / Glowing Shapes */}
      <div className="bg-animated-icons">
        <div className="float-icon icon-1">⚙️</div>
        <div className="float-icon icon-2">⚡</div>
        <div className="float-icon icon-3">🔍</div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2>Our Core Capabilities</h2>
          <p>Advanced engineering solutions tailored for modern electronics production.</p>
        </div>

        {/* 2x2 (responsive) Grid Layout */}
        <div className="cards-grid">
          {CARDS.map((card) => (
            <div
              className="card"
              key={card.title}
              style={{ background: cardBackground(card.image) }}
            >
              <div className="card__icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
