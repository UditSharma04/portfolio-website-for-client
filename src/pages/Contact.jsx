import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>+91 7877296523</p>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>BHUVNESHWARPATHER1@GMAIL.COM</p>
              </div>
              
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <a href="https://www.linkedin.com/in/bhuvneshwar-pather-428381306/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/bhuvneshwar-pather-428381306
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;