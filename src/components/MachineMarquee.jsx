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
    { id: 8, src: './assets/machine/Reflow Soldering Oven.png', title: 'Reflow Soldering Oven' },
    { id: 9, src: './assets/machine/SMT Pick & Place Machine.png', title: 'SMT Pick & Place Machine' },
    { id: 10, src: './assets/machine/X-Ray Inspection System.png', title: 'X-Ray Inspection System' },
  ];

  // Seamless infinite loop ke liye list ko duplicate kar diya —
  // animation -50% tak jaati hai, jo exactly ek set ke barabar hai.
  // Dono halves hamesha IDENTICAL hain (same images, same order), isliye
  // per-image auto-width hone par bhi total width dono taraf barabar
  // rehti hai — loop seamless rahega.
  const loopItems = [...machines, ...machines];

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes machineScroll {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-50%, 0, 0); }
          }
          .machine-track {
            animation: machineScroll 45s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
          }
          .machine-marquee-wrap:hover .machine-track {
            animation-play-state: paused;
          }
          .machine-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }
          .machine-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 34px rgba(10, 25, 65, 0.18);
          }
        `}
      </style>

      <div style={styles.textContainer}>
        {/* <span style={styles.eyebrow}>Our Machinery</span> */}
        <h2 style={styles.heading}>Our Machinery</h2>
      </div>

      <div style={styles.wrap} className="machine-marquee-wrap">
        <div style={styles.track} className="machine-track">
          {loopItems.map((item, index) => (
            <div style={styles.item} key={`${item.id}-${index}`} className="machine-card">
              <img
                src={item.src}
                alt={item.title}
                style={styles.image}
                loading="lazy"
                draggable="false"
              />
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
    backgroundColor: '#f6f8fb',
    padding: '70px 0 90px',
    overflow: 'hidden',
  },
  textContainer: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 40px auto',
    padding: '0 20px',
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#0d3b8c',
    marginBottom: '10px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#0a1f3d',
    margin: 0,
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
    // width intentionally NOT set — box apni-aap image ke natural
    // aspect ratio (height 250px ke hisaab se) ki width le legi,
    // taaki pura image bina crop/stretch ke dikhe.
    height: '250px',
    margin: '0 16px',
    borderRadius: '14px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 24px rgba(10, 25, 65, 0.10)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(10, 25, 65, 0.06)',
  },
  image: {
    height: '100%',
    width: 'auto',        // 'auto' (percentage nahi) — ye distortion/blur wali asli bug fix karta hai
    objectFit: 'contain', // pura image dikhega, crop nahi hoga
    display: 'block',
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '10px 16px',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: '0.2px',
    // Translucent dark-blue premium look
    background:
      'linear-gradient(to top, rgba(8, 20, 55, 0.92) 0%, rgba(13, 59, 140, 0.75) 55%, transparent 100%)',
  },
};

export default MachineMarquee;