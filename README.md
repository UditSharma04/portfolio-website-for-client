# Portfolio Website

A modern and responsive portfolio website built with React, showcasing professional background, projects, and skills. The website features smooth animations, intuitive navigation, and a clean design aesthetic.

## Features

- Responsive design that works across all devices
- Smooth page transitions using Framer Motion
- Dynamic routing with React Router
- Modern UI/UX with clean aesthetics
- Sections for projects, skills, and contact information

## Tech Stack

- React.js - Frontend library
- Vite - Build tool and development server
- React Router - For page navigation
- Framer Motion - For animations
- CSS - For styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
   ```bash
   git clone [your-repo-link]
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── assets/        # Static assets
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Public assets
└── index.html         # HTML template
```

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Deployment

This project is optimized for deployment on platforms like Vercel or Netlify. For Vercel deployment:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect it as a Vite project and set up the build configuration
4. Your site will be deployed and available at a Vercel URL

## License

This project is licensed under the MIT License - see the LICENSE file for details.
