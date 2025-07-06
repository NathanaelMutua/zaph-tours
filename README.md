


https://github.com/user-attachments/assets/70a3d929-1eb1-4532-a9fe-d6310cab6ba1


# Zaph Tours Kenya

Zaph Tours Kenya is a modern travel and adventure website that showcases the best travel experiences in Kenya and east africa. Built with React and Material-UI, it has a clean, responsive UI and dynamic content for destinations, trips, testimonials, and more.

---

## Features

- **Home Page:**  
  Hero section with background imagery, bold headlines, and a summary of the Zaph Tours experience.

- **Destinations:**

  - Featured destinations grid, displaying only highlighted locations.
  - Each card includes images, descriptions, and pricing chips.
  - Responsive layout for all screen sizes.

- **Trips:**

  - Trip packages with side-by-side images, detailed descriptions, pricing, and special offers.
  - “Book Now” and “Learn More” actions.

- **Testimonials:**

  - Real traveler reviews with dynamic star ratings.
  - Responsive card layout.

- **Newsletter Signup:**

  - Has signup section with styled input and button.
  - Clear, user-friendly design.

- **About Section:**

  - Company overview, mission, and key stats (clients, destinations, years of experience).
  - Themed text using Material-UI’s palette.

- **Navigation & Footer:**
  - Fixed, responsive navbar for easy navigation.
  - Consistent footer across all pages.

---

## Tech Stack

- **Frontend:**

  - [React](https://react.dev/) (with functional components and hooks)
  - [React Router](https://reactrouter.com/) for client-side routing
  - [Material-UI (MUI)](https://mui.com/) for UI components and theming
  - [TypeScript](https://www.typescriptlang.org/) for type safety

- **Styling:**

  - MUI’s `sx` prop and theme customization
  - Custom CSS for additional tweaks

- **Icons:**
  - [React Icons](https://react-icons.github.io/react-icons/) for visual cues (e.g., location, stars)

---

## Logic & Implementation

- **Data-Driven UI:**

  - Destinations, trip packages, and testimonials are stored as arrays of objects in the `/src/data` directory.
  - Components use `.filter()` to display only featured items and `.map()` to render lists dynamically.

- **Responsive Design:**

  - MUI’s Grid and Stack components ensure layouts adapt to all device sizes.
  - Responsive props and `sx` objects are used for breakpoints.

- **Theming:**

  - Custom theme in `/src/assets/theme.ts` sets primary/secondary colors, background, text, and card elevation.
  - Typography and palette are consistently applied via the `ThemeProvider`.

- **UI Logic Highlights:**
  - Navbar is fixed and content is padded to avoid overlap.
  - Cards use MUI’s elevation and chips for visual emphasis.
  - Star ratings in testimonials are rendered dynamically based on the review’s rating.
  - Trip Package ratings are also generated dynamicallty based on the review's rating.

---

## UI/UX

- **Modern, Clean Look:**

  - Consistent use of MUI’s design system for a professional appearance.
  - Cards, chips, and buttons provide clear calls to action.

- **Accessibility:**

  - Enough color contrast and font sizes.

- **Animations & Effects:**
  - Card images scale on hover for interactivity.

---

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
src/
  assets/         # Theme and static assets
  components/     # Reusable UI components (Navbar, Footer, Cards, etc.)
  data/           # Data files for destinations, trips, reviews
  pages/          # Page components (Home, Destinations, Trips, Contact)
  App.tsx         # Main app component with routing and theming
  main.tsx        # Entry point
public/           # Static files and images
```

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## My Use

This project is for demonstration purposes.

---

**Zaph Tours Kenya** – Explore the wild beauty of East Africa with expertly crafted tours and unforgettable experiences!
