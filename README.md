 🎨 The Open Gallery

  The Open Gallery is a modern, high-performance web application that brings the collection of the Art Institute of Chicago to your fingertips. Built with
  React 19 and TypeScript, it offers a seamless experience for exploring masterpieces, exhibitions, and artist biographies.

  !React (https://img.shields.io/badge/React-19-blue?logo=react)
  
  !TypeScript (https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
  ![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
  !Redux (https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)
  !Vitest (https://img.shields.io/badge/Testing-Vitest-brightgreen?logo=vitest)
  !Coverage (https://img.shields.io/badge/Coverage-88%25-brightgreen)

  🚀 Key Features

   - Daily Masterpiece: A featured "Artwork of the Day" on the landing page, curated through rotating logic.
   - Artworks Gallery: A responsive Masonry Grid with pagination to explore thousands of public domain works.
   - Artist Archives: Detailed biographies and curated portfolios for world-renowned artists.
   - Current Exhibitions: Real-time data on featured and permanent exhibitions at the Art Institute.
   - Advanced Search: Integrated search bar with suggested categories and real-time filtering.
   - Immersive Modal: High-resolution image viewer with smooth zoom and pan functionality for deep inspection.
   - Fluid Design: Fully responsive layout using modern CSS-in-JS (Styled Components) with fluid typography and spacing.

  🛠️ Tech Stack

   - Frontend: React 19 (TypeScript)
   - Build Tool: Vite
   - State Management: Redux Toolkit (Slices architecture)
   - Routing: React Router 7
   - Styling: Styled Components (with custom Mixins for fluid design)
   - API Client: Axios (interacting with the AIC API (https://api.artic.edu/docs/))
   - Testing: Vitest & React Testing Library

  🧪 Testing Excellence

  The project maintains a professional testing standard with 88% Line Coverage powered by Vitest. The suite includes:

   - Unit Testing: Isolated tests for reusable components (MasonryGrid, FeaturedSection, SearchBar).
   - Integration Testing: Full verification of Redux Thunks, verifying the complete lifecycle of asynchronous data fetching (pending, fulfilled, rejected).
   - Page Testing: Comprehensive tests for every route, including complex interactions like navigation, form submissions, and modal controls.
   - Custom Utilities: A specialized renderWithProviders utility ensures a consistent testing environment (Redux, Router, Theme) across the entire suite.

  Run the tests yourself:

   1 npm run test       # Run the Vitest suite
   2 npm run coverage   # Generate detailed coverage report

  📦 Installation & Setup

   1. Clone the repository:

   1    git clone https://github.com/roberrcast/art-project.git
   2. Install dependencies:

   1    npm install
   3. Start the development server:
   1    npm run dev
   4. Build for production:
   1    npm run build

  📜 API Attribution

  All data and images are provided by the Art Institute of Chicago API (https://api.artic.edu/docs/). This project was built for educational purposes to
  showcase modern frontend architecture, type safety, and rigorous testing patterns.

  ---

  👤 Developer
  Roberto Rodriguez - LinkedIn (https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer) | GitHub (https://github.com/roberrcast)
