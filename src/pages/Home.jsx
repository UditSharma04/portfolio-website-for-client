import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Bhuvneshwar Pather</h1>
          <h2>Visionary Designer</h2>
          <p>
            Dedicated to crafting innovative and impactful solutions that blend creativity with functionality. 
            Focused on creating diverse projects that highlight a passion for excellence and a commitment to 
            pushing design boundaries.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;