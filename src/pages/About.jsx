import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              A visionary designer dedicated to crafting innovative and impactful solutions 
              that blend creativity with functionality. Focused on creating diverse projects 
              that highlight a passion for excellence and a commitment to pushing design boundaries.
            </p>
            
            <h3>What I Do</h3>
            <ul className="what-i-do-list">
              <li>
                <strong>Illustration:</strong> Work primarily in digital formats, delivering high-quality 
                editorial illustrations and brand assets
              </li>
              <li>
                <strong>Visual Identity:</strong> Well-versed in branding, creating unique and 
                memorable visual identities for clients
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;