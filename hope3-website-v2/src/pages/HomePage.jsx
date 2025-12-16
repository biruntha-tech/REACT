import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
