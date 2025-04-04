import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Bhuvneshwar Pather</h3>
            <p>Visionary Designer</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/bhuvneshwar-pather-42838b506" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:BHUVNESHWARPATHER1@GMAIL.COM">
              <FaEnvelope className="social-icon" />
            </a>
            <a href="tel:+917877296523">
              <FaPhone className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Bhuvneshwar Pather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;