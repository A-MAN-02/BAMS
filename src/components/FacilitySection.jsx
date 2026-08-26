// FacilitySection.jsx
import React from 'react';
import './FacilitySection.css'; 

// Example Data - Apne ZIP file se actual image paths yahan update karo
const facilityImages = [
  { id: 1, src: '/images/machine1.jpg', alt: 'SMT Assembly Line', title: 'SMT Assembly Line' },
  { id: 2, src: '/images/machine2.jpg', alt: 'Wave Soldering', title: 'Wave Soldering Machine' },
  { id: 3, src: '/images/machine3.jpg', alt: 'AOI Testing', title: 'AOI Inspection' },
  { id: 4, src: '/images/machine4.jpg', alt: 'Box Build Area', title: 'Box Build & Assembly' },
  { id: 5, src: '/images/machine5.jpg', alt: 'X-Ray Inspection', title: 'X-Ray Testing' },
  { id: 6, src: '/images/machine6.jpg', alt: 'Packaging', title: 'Final Packaging' },
];

const FacilitySection = () => {
  return (
    <section className="facility-section">
      <div className="facility-container">
        
        {/* Is heading par apni Intro wali CSS classes lagayein */}
        <h2 className="facility-heading">🏭 Our Facility & Machines</h2>
        <p className="facility-subheading">Equipped with state-of-the-art technology for high-quality manufacturing.</p>
        
        {/* Grid for Image Cards */}
        <div className="facility-grid">
          {facilityImages.map((image) => (
            <div key={image.id} className="facility-card">
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="facility-image" />
              </div>
              <h3 className="image-title">{image.title}</h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FacilitySection;