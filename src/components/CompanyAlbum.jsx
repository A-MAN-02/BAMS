import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanyAlbum = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading & Paragraph Animation
    gsap.fromTo(
      sectionRef.current.querySelector('.album-header'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // 7 Images Grid Animation
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8,
        stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: '.album-grid',
          start: 'top 75%',
        }
      }
    );
  }, []);

  // 8th duplicate image ko hata diya gaya hai, ab sirf 7 hain
  const albumData = [
    { id: 1, src: './assets/advanced-smt-line.jpeg', title: 'Advanced SMT Line' },
    { id: 2, src: './assets/pcb-baking-oven.jpeg', title: 'PCB Baking Oven' },
    { id: 3, src: './assets/bga-rework-station.jpeg', title: 'BGA Rework Station' },
    { id: 4, src: './assets/component-modules.jpeg', title: 'Component Modules' },
    { id: 5, src: './assets/precision-stencils.jpeg', title: 'Precision Stencils' },
    { id: 6, src: './assets/machine-operation.jpeg', title: 'Machine Operation' },
   /* { id: 7, src: './assets/exhaust-system.jpeg', title: 'Conveyor & Exhaust System' }
   */
  ];

  return (
    <section ref={sectionRef} style={styles.section}>
      
      {/* Ye CSS block sirf hover effects (Zoom/Lift) ke liye hai, baki sab styles object me hai */}
      <style>
        {`
          .album-card {
            transition: transform 0.4s ease, box-shadow 0.4s ease !important;
          }
          .album-card:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
          }
          .album-img {
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          }
          .album-card:hover .album-img {
            transform: scale(1.08) !important;
          }
        `}
      </style>

      <div className="album-header" style={styles.textContainer}>
        <h2 style={styles.heading}>Inside Our Facility</h2>
        <p style={styles.paragraph}>
          We take immense pride in our state-of-the-art manufacturing infrastructure. 
          Equipped with high-speed SMT lines, precision BGA rework stations, and rigorous 
          quality control testing, we ensure every electronic component meets the highest 
          industry standards of reliability and performance.
        </p>
      </div>

      <div className="album-grid" style={styles.grid}>
        {albumData.map((item, index) => (
          <div 
            key={item.id} 
            ref={(el) => (cardsRef.current[index] = el)}
            style={styles.card}
            className="album-card"
          >
            <div style={styles.imageWrapper}>
              <img 
                src={item.src} 
                alt={item.title} 
                style={styles.image}
                className="album-img"
              />
            </div>
            <div style={styles.cardFooter}>
              <h4 style={styles.cardTitle}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Modern Inline Styles (Sab kuch ek jagah)
const styles = {
  section: { 
    padding: '0px 5%', 
    backgroundColor: '#fcfcfd', // Thoda premium off-white color
    textAlign: 'center', 
    fontFamily: "'Inter', sans-serif" 
  },
  textContainer: { 
    maxWidth: '850px', 
    margin: '0 auto 60px auto' 
  },
  heading: { 
    fontSize: '2.8rem', 
    color: '#111', 
    marginBottom: '20px', 
    fontWeight: '800' 
  },
  paragraph: { 
    fontSize: '1.15rem', 
    color: '#555', 
    lineHeight: '1.8' 
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '40px', 
    justifyContent: 'center',
    maxWidth: '1300px',
    margin: '0 auto'
  },
  card: { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', // Jyada gol kinare modern look ke liye
    overflow: 'hidden', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)', // Soft shadow
    border: 'none',
    cursor: 'pointer'
  },
  imageWrapper: { 
    width: '100%', 
    height: '240px', // Image height thodi badhai hai
    overflow: 'hidden' 
  },
  image: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
  cardFooter: { 
    padding: '20px 15px', 
    backgroundColor: '#fff'
  },
  cardTitle: { 
    margin: 0, 
    fontSize: '1.15rem', 
    color: '#1a1a1a', 
    fontWeight: '700',
    letterSpacing: '0.3px'
  }
};

export default CompanyAlbum;