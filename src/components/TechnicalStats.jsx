const STATS = [
  { number: "95K", unit: "+", label: "CPH SMT Capacity" },
  { number: "24", unit: "+", label: "Layer Boards" },
  { number: "0.15", unit: "mm", label: "Fine-Pitch ICs" },
  { number: "24-48", unit: "hrs", label: "Quick-Turn Prototypes" },
];

const TechnicalStats = () => {
  return (
    <section className="technical-stats" id="tech-specs">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <h3 className="stat-number">
                {stat.number}
                <span className="stat-unit">{stat.unit}</span>
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="stat-disclaimer">
          <p>* Advanced 01005 / 0201 component handling & BGA / QFN / CSP support.</p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStats;
