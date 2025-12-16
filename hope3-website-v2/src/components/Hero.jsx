import '../styles/hero.css';
import graduation from '../assets/pexels-pixabay-267885.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <img src={graduation} alt="Hero" className="hero-image" />
    </section>
  );
};

export default Hero;
