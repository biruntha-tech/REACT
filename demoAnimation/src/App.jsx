import { useState, useEffect, useRef } from 'react';
import './App.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';

function App() {
  const [rotation, setRotation] = useState(0);
  const [frozen, setFrozen] = useState(false);
  const [scale, setScale] = useState(0);
  const lastScrollY = useRef(0);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  useEffect(() => {
    const handleScroll = () => {
      if (frozen) {
        setFrozen(false);
      }
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;
      
      setRotation(prev => prev + delta * 0.5);
      setScale(Math.min(scrollY / 300, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [frozen]);

  const handleImageClick = (index) => {
    setFrozen(true);
    const targetRotation = -index * 45;
    setRotation(targetRotation);
  };

  return (
    <div className="app">
      <div className="scroll-area" />
      <div className="circle-container" style={{ opacity: scale }}>
        {images.map((img, index) => {
          const angle = (index * 45 + rotation) * (Math.PI / 180);
          const radius = 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const imgScale = 0.7 + Math.cos(angle) * 0.3;
          const zIndex = Math.round(50 + Math.cos(angle) * 50);

          return (
            <div
              key={index}
              className={`image-wrapper ${frozen ? 'frozen' : ''}`}
              style={{
                transform: `translate(${x}px, ${y}px) scale(${imgScale * scale})`,
                zIndex,
                opacity: scale
              }}
              onClick={() => handleImageClick(index)}
            >
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
