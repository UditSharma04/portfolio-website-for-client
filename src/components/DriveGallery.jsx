import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DriveGallery = () => {
  const [images, setImages] = useState([]);
  const driveLink = 'https://drive.google.com/drive/folders/1x91xCutQCTdrGxObp3-C8dqarUnI3dAf';


  return (
    <div className="drive-gallery">
      
      <div className="show-more-container">
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="show-more-button"
        >
          Show More on Google Drive
        </a>
      </div>

      <style jsx>{`
        .drive-gallery {
          padding: 2rem 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 16/9;
        }

        .show-more-container {
          text-align: center;
          margin-top: 2rem;
        }

        .show-more-button {
          display: inline-block;
          padding: 1rem 2rem;
          background-color: #9C7F50;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .show-more-button:hover {
          background-color: #826940;
        }
      `}</style>
    </div>
  );
};

export default DriveGallery;