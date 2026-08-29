import React from 'react';

const MachineMarquee = () => {
  // Apni "sir wali" naye images yahan daalne ke liye — bas src path change
  // kar do (ya isi filename se public/assets me overwrite kar do).
  const machines = [
    { id: 1, src: './assets/machine/3D AOI Machine.png', title: '3D AOI Machine' },
     { id: 2, src: './assets/machine/Automatic Solder Paste Printer.png', title: 'Automatic Solder Paste Printer' },
    { id: 3, src: './assets/machine/BGA Rework Station.png', title: 'BGA Rework Station' },
    { id: 4, src: './assets/machine/High-Speed Pick & Place.png', title: 'High-Speed Pick & Place' },
    { id: 5, src: './assets/machine/Lead-Free Reflow Oven.png', title: 'Lead-Free Reflow Oven' },
    { id: 6, src: './assets/machine/PCB Baking Oven.png', title: 'PCB Baking Oven' },
    { id: 7, src: './assets/machine/Precision Solder Paste Printer.png', title: 'Precision Solder Paste Printer' },
    { id: 7, src: './assets/machine/Reflow Soldering Oven.png', title: 'Reflow Soldering Oven' },
    { id: 7, src: './assets/machine/SMT Pick & Place Machine.png', title: 'SMT Pick & Place Machine' },
    { id: 7, src: './assets/machine/X-Ray Inspection System.png', title: 'X-Ray Inspection System' },
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
            animation: machineScroll 65s linear infinite;
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
    // width: '220px',
    height: '250px',
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
    fontSize: '1rem',
    fontWeight: 700,
    color: '#030303',
    // background: 'linear-gradient(to top, rgba(252, 250, 250, 0.65), transparent)',
    background: 'linear-gradient( rgba(44, 241, 244, 0.87) )',
  },
};

export default MachineMarquee;
