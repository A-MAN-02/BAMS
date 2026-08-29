import React from 'react';

const MachineMarquee = () => {
  // Apni "sir wali" naye images yahan daalne ke liye — bas src path change
  // kar do (ya isi filename se public/assets me overwrite kar do).
  const machines = [
    { id: 1, src: './assets/small-machine.png', title: 'Pick & Place' },
    { id: 2, src: './assets/advanced-smt-line.jpeg', title: 'SMT Line' },
    { id: 3, src: './assets/pcb-baking-oven.jpeg', title: 'Baking Oven' },
    { id: 4, src: './assets/bga-rework-station.jpeg', title: 'BGA Rework' },
    { id: 5, src: './assets/machine-operation.jpeg', title: 'Line Operation' },
    { id: 6, src: './assets/exhaust-system.jpeg', title: 'Exhaust System' },
  ];

  // Seamless infinite loop ke liye list ko duplicate kar diya —
  // animation -50% tak jaati hai, jo exactly ek set ke barabar hai.
  const loopItems = [...machines, ...machines];

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes machineScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .machine-track {
            animation: machineScroll 25s linear infinite;
          }
          .machine-marquee-wrap:hover .machine-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div style={styles.wrap} className="machine-marquee-wrap">
        <div style={styles.track} className="machine-track">
          {loopItems.map((item, index) => (
            <div style={styles.item} key={`${item.id}-${index}`}>
              <img src={item.src} alt={item.title} style={styles.image} />
              <span style={styles.caption}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fcfcfd',
    padding: '40px 0 80px',
    overflow: 'hidden',
  },
  wrap: {
    width: '100%',
    overflow: 'hidden',
    maskImage:
      'linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)',
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)',
  },
  track: {
    display: 'flex',
    width: 'max-content',
  },
  item: {
    flex: '0 0 auto',
    width: '220px',
    height: '150px',
    margin: '0 16px',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '8px 12px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
  },
};

export default MachineMarquee;
