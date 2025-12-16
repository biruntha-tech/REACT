import { useState, useEffect } from 'react';
import '../styles/animation.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

function Animation() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.floor(scrollY / 300) % images.length;

  const getMainPosition = (index) => {
    const centerIndex = activeIndex;
    const leftIndex = (centerIndex - 1 + images.length) % images.length;
    const rightIndex = (centerIndex + 1) % images.length;
    
    if (index === centerIndex) return { x: 0, scale: 1.3, opacity: 1, zIndex: 100, isCenter: true };
    if (index === rightIndex) return { x: 300, scale: 1, opacity: 0.8, zIndex: 50, isCenter: false };
    if (index === leftIndex) return { x: -300, scale: 1, opacity: 0.8, zIndex: 50, isCenter: false };
    
    const diff = (index - activeIndex + images.length) % images.length;
    const angle = diff * 45 * (Math.PI / 180);
    return {
      x: Math.cos(angle) * 400,
      y: Math.sin(angle) * 200,
      scale: 0.6,
      opacity: 0.4,
      zIndex: 10,
      isCenter: false,
      blur: 2
    };
  };

  return (
    <div className="container">
      <div className="carousel">
        {images.map((img, index) => {
          const pos = getMainPosition(index);
          return (
            <div
              key={index}
              className="image-wrapper"
              style={{
                transform: `translate(${pos.x}px, ${pos.y || 0}px) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
                borderRadius: pos.isCenter ? '0px' : '50%',
                filter: `blur(${pos.blur || 0}px)`
              }}
            >
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <div style={{ width: '300vw', height: '100px' }} />
    </div>
  );
}

export default Animation;