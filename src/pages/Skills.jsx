import { motion } from 'framer-motion';
import { FaPalette, FaCamera, FaLaptop } from 'react-icons/fa';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Skills & Technologies</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="skills-container">
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="category-header">
              <FaPalette className="category-icon" />
              <h3>Areas of Expertise</h3>
            </div>
            <motion.ul className="skill-list" variants={containerVariants}>
              <motion.li variants={itemVariants}>Editorial Design</motion.li>
              <motion.li variants={itemVariants}>Print Design</motion.li>
              <motion.li variants={itemVariants}>Brand Design and Refresh</motion.li>
              <motion.li variants={itemVariants}>Creation of Brand Assets</motion.li>
              <motion.li variants={itemVariants}>Poster Design</motion.li>
              <motion.li variants={itemVariants}>Packing Design</motion.li>
              <motion.li variants={itemVariants}>Photography</motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="category-header">
              <FaLaptop className="category-icon" />
              <h3>Proficiencies</h3>
            </div>
            <motion.ul className="skill-list" variants={containerVariants}>
              <motion.li variants={itemVariants}>Software for Layout Design and Editing</motion.li>
              <motion.li variants={itemVariants}>Traditional and Experimental Graphic Design</motion.li>
              <motion.li variants={itemVariants}>Digital and Print Format Proofing and Publishing</motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="category-header">
              <FaCamera className="category-icon" />
              <h3>Specialties</h3>
            </div>
            <motion.ul className="skill-list" variants={containerVariants}>
              <motion.li variants={itemVariants}>Logo Design</motion.li>
              <motion.li variants={itemVariants}>Banner/Flyer Creation</motion.li>
              <motion.li variants={itemVariants}>Magazine Cover Design</motion.li>
              <motion.li variants={itemVariants}>Brand Identity Development</motion.li>
              <motion.li variants={itemVariants}>Social Media Post Design</motion.li>
              <motion.li variants={itemVariants}>Photography</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;