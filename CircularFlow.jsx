import React from 'react';
import './CircularFlow.css';

const CircularFlow = () => {
  const images = [
    { id: 1, src: '/images/image1.jpg', alt: 'Step 1' },
    { id: 2, src: '/images/image2.jpg', alt: 'Step 2' },
    { id: 3, src: '/images/image3.jpg', alt: 'Step 3' },
    { id: 4, src: '/images/image4.jpg', alt: 'Step 4' },
    { id: 5, src: '/images/image5.jpg', alt: 'Step 5' },
    { id: 6, src: '/images/image6.jpg', alt: 'Step 6' },
    { id: 7, src: '/images/image7.jpg', alt: 'Step 7' },
    { id: 8, src: '/images/image8.jpg', alt: 'Step 8' }
  ];

  return (
    <div className="circular-flow">
      {images.map((img, index) => (
        <div key={img.id} className={`flow-item item-${index + 1}`}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default CircularFlow;
