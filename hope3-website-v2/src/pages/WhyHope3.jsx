import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Animation from '../components/Animation';
import '../styles/whyhope3.css';
import headerImg from '../assets/pexels-pixabay-267885.jpg';
import hope3Logo from '../assets/hope3.png';
import canvaVideo from '../assets/canvaAnimation.mp4';

const WhyHope3 = () => {
  const growthStages = [
    { 
      number: 1, 
      text: "Girl in front of a very small school building", 
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      alt: "Small school building"
    },
    { 
      number: 2, 
      text: "Word 'Learn' displayed clearly", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      alt: "Learn concept"
    },
    { 
      number: 3, 
      text: "Boy standing in front of an arch with HOPE3 logo", 
      image: hope3Logo,
      alt: "HOPE3 logo arch"
    },
    { 
      number: 4, 
      text: "Girl in front of a college building", 
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      alt: "College building"
    },
    { 
      number: 5, 
      text: "Girl doing lab work", 
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
      alt: "Lab work"
    },
    { 
      number: 6, 
      text: "Boy doing tech work using a laptop", 
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      alt: "Tech work with laptop"
    },
    { 
      number: 7, 
      text: "Girl graduating with cap and gown", 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      alt: "Graduation ceremony"
    },
    { 
      number: 8, 
      text: "Boy and girl entering a high-rise building", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      alt: "High-rise building entrance"
    }
  ];

  const StageImage = ({ stage }) => (
    <img 
      src={stage.image} 
      alt={stage.alt}
      className="stage-img"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  );

  const PlaceholderImage = ({ text }) => (
    <div className="placeholder-image" style={{ display: 'none' }}>
      <span>📷</span>
      <small>{text}</small>
    </div>
  );

  return (
    <div className="whyhope3-page">
      <Navbar />
      
      {/* Header Image */}
      <div className="header-image">
        <img src={headerImg} alt="Header" />
      </div>
      
      {/* Video Section */}
      <div className="video-section">
        <video autoPlay muted loop width="100%">
          <source src={canvaVideo} type="video/mp4" />
        </video>
        <div className="video-text">
          <h2>Our Mission</h2>
          <p>
            HOPE3 is dedicated to transforming lives through education and opportunity. 
            We believe that every individual deserves access to quality education and 
            the chance to reach their full potential, regardless of their background 
            or circumstances.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            We envision a world where education serves as the great equalizer, 
            breaking down barriers and creating pathways to success for all. 
            Through our comprehensive approach, we aim to nurture not just academic 
            excellence, but also character, leadership, and social responsibility.
          </p>
          
          <h2>Our Philosophy</h2>
          <p>
            At HOPE3, we believe in the power of holistic development. Our philosophy 
            centers on three pillars: Hope (inspiring dreams), Opportunity (creating 
            pathways), and Progress (measuring impact). We understand that true 
            transformation happens when we address not just educational needs, but 
            also provide mentorship, life skills, and ongoing support throughout 
            each individual's journey.
          </p>
        </div>
      </div>



      {/* How We Do It Section */}
      <section className="how-we-do-it">
        <div className="section-title">
          <h2>How we do it</h2>
        </div>
        
        <Animation />
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-buttons">
          <button className="cta-btn">Apply to Join HOPE3</button>
          <button className="cta-btn">Volunteer with HOPE3</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyHope3;