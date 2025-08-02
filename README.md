# Newflicks – Movie Catalogue App

A full-featured movie catalogue application built with **Next.js**, **Firebase**, **TypeScript**, and **Tailwind CSS**. This project is designed for performance, clean architecture, and a great user experience.

## Features

- **Landing Page:** Clean and engaging introduction to the app.
- **Authentication:** User sign-up and login powered by Firebase Auth.
- **Dashboard:** Displays trending movies and TV shows, grouped by genre.
- **Movie Info Page:** Detailed information about each movie or TV show.
- **User List Page:** Allows users to manage their personal movie list.
- **Search:** Find movies and TV shows quickly.
- **Responsive Design:** Works great on desktop and mobile.

## Optimization Highlights

- 🚀 Most data fetching is handled server-side using Next.js API routes.
- 🔁 All movie genres are pre-fetched server-side via `/api/movies` to reduce client-side overhead.
- 🧠 Dynamic imports for heavy components to reduce initial bundle size.
- 💡 Minimal use of client-side components where possible.
- 📦 Server functions are organized and efficiently utilized to minimize response time.

## Tech Stack

- **Next.js** (App Router)
- **React** & **TypeScript**
- **Firebase** (Authentication & Firestore)
- **Tailwind CSS** (Styling)
- **Swiper** (Carousels)
- **Framer Motion** (Animations)
- **styled-components** (Reusable UI elements)

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/webdev-steve01/netflix-clone
cd newflicks-clone
```

### 2. Install dependencies

```sh
npm install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Firebase and TMDB credentials:

```
NEXT_PUBLIC_TMDB_BEARER_TOKEN=your_tmdb_token
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
# ...other Firebase config variables
```

### 4. Start the development server

```sh
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Folder Structure

- `/app` – Next.js app directory (pages, layouts, API routes)
- `/components` – Reusable UI components
- `/context` – React context providers
- `/hooks` – Custom React hooks
- `/public` – Static assets (images, icons)
- `/utils` – Utility functions and interfaces

## Notes

- This project uses the Next.js App Router and server components where possible.
- Authentication is secured with Firebase, and user data (e.g., movie lists) is stored in Firestore.
- Movie data is fetched from TMDB using a proxy API route for better control and caching.

---

**Newflicks** – Built with ❤️ by Osesojeh S. Sylvester-Paul.
