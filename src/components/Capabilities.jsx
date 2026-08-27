const CARDS = [
  {
    title: "PCB Assembly",
    desc: "SMT, THT, mixed technology, fine pitch, BGA",
    hoverText: "Precision assembly lines built for tight tolerances at scale.",
    image: "PCB.jpg",
    size: "bento--xl",
    theme: "bento--dark",
  },
  {
    title: "Box Build & Integration",
    desc: "PCBA, mechanical, cable, system integration",
    hoverText: "From bare board to finished, ready-to-ship product.",
    image: "box_.jpeg",
    size: "bento--tall",
    theme: "bento--yellow",
  },
  {
    title: "Turnkey Manufacturing",
    desc: "BOM procurement, build-to-spec, traceability, logistics",
    hoverText: "One partner, start to finish — we handle the whole build.",
    image: "Turnkey.jpg",
    size: "bento--tall",
    theme: "bento--mint",
  },
  {
    title: "Test & Quality",
    desc: "AOI, X-Ray, ICT, FCT, burn-in",
    hoverText: "Every unit checked before it leaves the floor.",
    image: "Test.jpg",
    size: "bento--sm",
    theme: "bento--dark",
  },
  {
    title: "Supply Chain & Component Management",
    desc: "Sourcing, inventory, shortage management, global procurement",
    hoverText: "We keep components moving, even when the market doesn't.",
    image: "Supply.jpg",
    size: "bento--wide",
    theme: "bento--blue",
  },
  {
    title: "NPI & Prototyping",
    desc: "DFM, engineering builds, pilot production, ramp",
    hoverText: "From first prototype to production ramp, fast.",
    image: "NPI.jpg",
    size: "bento--xl",
    theme: "bento--peach",
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities" id="capabilities">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Capabilities</h2>
          <p>Advanced engineering solutions tailored for modern electronics production.</p>
        </div>

        {/* Bento-style asymmetric grid: mixed tile sizes, alternating dark/pastel */}
        <div className="bento-grid">
          {CARDS.map((card) => (
            <div className={`bento-card ${card.size} ${card.theme}`} key={card.title}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: `url('./assets/${card.image}')` }}
              ></div>
              <div className="bento-card__mark">+</div>
              <div className="bento-card__body">
                <h3 className="bento-card__title">{card.title}</h3>
                <p className="bento-card__desc">{card.desc}</p>
                {/* Dummy text for now — swap with real copy per card later */}
                <p className="bento-card__hover-text">{card.hoverText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;