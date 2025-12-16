import '../styles/footer.css';
import iconsFooter from '../assets/iconsfooter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-outer-box">
            <div className="footer-box">
              <div className="footer-left">
                <div className="footer-title">Hope3 Foundation</div>
                <div className="footer-address">2135,204th PL NE, Sammamish, WA - 98074</div>
                <a href="mailto:contact@hope3.org" className="footer-email">contact@hope3.org</a>
                <div className="social-links">
                  <img src={iconsFooter} alt="Social Media Icons" />
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-nonprofit">US IRS 501(c)(3) Non-Profit Organization</div>
                <div className="footer-ein">ID: "EIN 94-3184861"</div>
                <div className="footer-bottom">
                  © 2024 All Rights Reserved
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;