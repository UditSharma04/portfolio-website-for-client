import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Indian Dream Studio',
      category: 'branding',
      description: [
        'Designed modern and minimalist logo featuring a camera icon with film reel elements',
        'Created promotional flyers for photography services including pre-wedding, fashion, and maternity shoots',
        'Developed cohesive brand identity materials with elegant typography and clean layouts'
      ]
    },
    {
      id: 2,
      title: 'Fashion Magazine Designs',
      category: 'editorial',
      description: [
        'Crafted sophisticated magazine covers for fashion and lifestyle publications',
        'Featured "Monochrome Mastery" edition highlighting minimalist color palettes',
        'Designed Fashion Week Paris special edition with artistic fabric elements',
        'Incorporated contemporary typography and layout design principles'
      ]
    },
    {
      id: 3,
      title: 'Cultour Travels',
      category: 'branding',
      description: [
        'Developed playful and vibrant logo design featuring cultural elements',
        'Created comprehensive social media design package for travel promotions',
        'Designed series of destination-focused promotional materials for Rajasthan tourism',
        'Managed Instagram content layout and visual storytelling'
      ]
    },
    {
      id: 4,
      title: 'Jewels by Nandita',
      category: 'branding',
      description: [
        'Created an elegant and minimalist logo design featuring a hexagonal leaf motif',
        'Developed dual-color variations (olive and gold) for versatile brand applications',
        'Implemented sophisticated typography that reflects the brand\'s premium positioning',
        'Designed cohesive brand identity elements maintaining visual consistency'
      ]
    },
    {
      id: 5,
      title: 'RadEl Jewelry Website Design',
      category: 'web',
      description: [
        'Designed and developed a sophisticated e-commerce website for luxury jewelry brand',
        'Created an elegant brand identity with minimalist logo and premium color palette',
        'Implemented responsive design with seamless user experience across all devices',
        'Integrated features like product showcase, secure checkout, and trust indicators'
      ]
    },
    {
      id: 6,
      title: 'Wedding E-Invitation Designs',
      category: 'digital',
      description: [
        'Created elegant and personalized digital wedding invitations',
        'Designed multiple variations with floral themes and sophisticated typography',
        'Incorporated modern design elements while maintaining traditional aesthetics',
        'Developed coordinated design sets including Lagan ceremony and wedding cards'
      ]
    },
    {
      id: 7,
      title: 'Typography and Brand Identity',
      category: 'branding',
      description: [
        'Developed comprehensive typography system using Prata & Roboto font families',
        'Created sophisticated color palette featuring gold (9C7F50), charcoal (34312C), and complementary grays',
        'Implemented consistent visual language across various brand applications',
        'Balanced modern aesthetics with timeless design principles'
      ]
    },
    {
      id: 8,
      title: 'July Fashion Campaign',
      category: 'social',
      description: [
        'Designed dynamic social media posts celebrating July with creative typography',
        'Created contrasting themes featuring modern and traditional fashion elements',
        'Incorporated engaging visual storytelling through model photography and styling',
        'Developed consistent branding elements across multiple post designs'
      ]
    },
    {
      id: 9,
      title: 'Fashion Manufacturing Banner',
      category: 'print',
      description: [
        'Designed impactful promotional banner for India\'s leading manufacturer',
        'Created eye-catching layout combining geometric patterns with fashion photography',
        'Implemented effective typography hierarchy for clear message communication',
        'Utilized brand colors and modern design elements for professional presentation'
      ]
    },
    {
      id: 10,
      title: 'Articles & Resources Section',
      category: 'web',
      description: [
        'Developed engaging blog section featuring jewelry craftsmanship stories',
        'Created visually appealing layouts for articles about luxury lifestyle',
        'Designed responsive article templates with elegant typography',
        'Implemented user-friendly navigation and reading experience'
      ]
    },
    {
      id: 11,
      title: 'Fashion Website Banners',
      category: 'digital',
      description: [
        'Designed collection of seasonal fashion banners for e-commerce platforms',
        'Created cohesive visual system for winter collection promotions',
        'Implemented modern, minimalist design aesthetic with earth tone palette',
        'Developed responsive banner designs for various platform requirements'
      ]
    },
    {
      id: 12,
      title: 'AU Small Finance Bank Campaign',
      category: 'social',
      description: [
        'Designed social awareness campaign during COVID-19 pandemic',
        'Created impactful visual messaging for "Use Your New Freedom Responsibly"',
        'Developed illustration style featuring social distancing concept',
        'Implemented brand guidelines while maintaining campaign effectiveness'
      ]
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Branding', value: 'branding' },
    { name: 'Editorial', value: 'editorial' },
    { name: 'Web', value: 'web' },
    { name: 'Digital', value: 'digital' },
    { name: 'Social', value: 'social' },
    { name: 'Print', value: 'print' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.div 
          className="filter-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4 }
                }
              }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <ul>
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="project-category">
                  <span>{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;