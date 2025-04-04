import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="name-text">Bhuvneshwar Pather</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <a 
          href="/CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
        >
          <FaFileAlt /> Resume
        </a>
      </div>

      <style jsx>{`
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #9C7F50;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.3s ease;
          animation: glow 1.5s ease-in-out infinite alternate;
        }

        .resume-btn:hover {
          background-color: #826940;
          transform: translateY(-2px);
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 5px #9C7F50,
                       0 0 10px #9C7F50,
                       0 0 15px #9C7F50;
          }
          to {
            box-shadow: 0 0 10px #9C7F50,
                       0 0 20px #9C7F50,
                       0 0 30px #9C7F50;
          }
        }

        .name-text {
          display: block;
        }

        @media screen and (max-width: 960px) {
          .name-text {
            display: none;
          }
          .navbar-logo {
            display: none;
          }
          .navbar {
            height: 70px;
          }
          .menu-icon {
            display: block;
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.8rem;
            cursor: pointer;
            color: #333;
          }
          .resume-btn {
            margin: 0;
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;