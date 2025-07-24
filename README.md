## Movie Catalogue App

A full-featured movie catalogue application built with Next.js, Firebase, TypeScript, and Tailwind CSS. This project is focused on performance, clean architecture, and great user experience.

## Core Features

Landing Page – Clean and engaging introduction to the app

Authentication – User sign-up and login powered by Firebase Auth

Dashboard – Displays movies fetched server-side via Next.js API routes, grouped by genre

Movie Info Page – Detailed information about each movie

User List Page – Allows users to manage their personal movie list

## Optimization Highlights

This project was built with performance and efficiency in mind:

🚀 Most data fetching is handled on the server using Next.js API routes

🔁 All movie genres are pre-fetched server-side via /api/movies to reduce client-side overhead

🧠 Dynamic imports for heavy components to reduce initial bundle size

💡 Minimal use of client-side components where possible

📦 Server functions are organized and efficiently utilized to minimize response time

## External Libraries & Tools Used

Firebase – Authentication and real-time database

Swiper – Responsive carousels for browsing movies

Framer Motion – Smooth animations between pages and elements

pnpm – Used for managing and testing packages

styled-components – Used for reusable loaders and styled UI elements

## Getting Started

To run the project locally:

Clone the repository

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and visit:
http://localhost:3000

📌 Notes
This project is built using Next.js App Router and takes full advantage of server components where possible.

Authentication is secured with Firebase, while user data (e.g., movie lists) is stored in Firebase's Firestore.

Movie data is fetched from TMDB using a proxy API route for better control and caching.

📄 License
This project is open-source and available under the MIT License.
