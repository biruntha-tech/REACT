import React from 'react';
import './CircularFlow.css';
import image1 from './assets/Screenshots/image1.jpg';
import image2 from './assets/Screenshots/image2.jpg';
import image3 from './assets/Screenshots/image3.jpg';
import image4 from './assets/Screenshots/image4.jpg';
import image5 from './assets/Screenshots/image5.jpg';
import image6 from './assets/Screenshots/image6.jpg';
import image7 from './assets/Screenshots/image7.jpg';
import image8 from './assets/Screenshots/image8.jpg';

const CircularFlow: React.FC = () => {
  const images = [
    { id: 1, src: image1, alt: 'Step 1' },
    { id: 2, src: image2, alt: 'Step 2' },
    { id: 3, src: image3, alt: 'Step 3' },
    { id: 4, src: image4, alt: 'Step 4' },
    { id: 5, src: image5, alt: 'Step 5' },
    { id: 6, src: image6, alt: 'Step 6' },
    { id: 7, src: image7, alt: 'Step 7' },
    { id: 8, src: image8, alt: 'Step 8' }
  ];

  return (
    <div className="circular-container">
      <div className="circle">
        {images.map((img, index) => (
          <div key={img.id} className={`image-item position-${index + 1}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularFlow;