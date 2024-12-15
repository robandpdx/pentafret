# Guitar Scales and Pentatonics Fretboard Viewer

This repository contains the code for an app that allows you to visualize scales and pentatonics on a guitar fretboard. It’s a handy tool for musicians, guitar enthusiasts, and learners to explore scales and their corresponding pentatonic patterns interactively.

## Features

### Controls
At the top of the page, you’ll find three controls to customize your view:
1. **Root Note**: Select the root note of the scale. Options include all 12 notes (e.g., A, B, C#, etc.).
2. **Scale**: Choose from a variety of scales, including:
   - Major
   - Minor
   - Blues
   - Dorian
   - Mixolydian
   - Phrygian
   - Harmonic Minor
   - Melodic Minor
3. **Scale Type**: Select whether to view the full scale or just the pentatonic version.

### Fretboard Display
- The app displays a guitar fretboard with 15 frets and 6 strings.
- Each note in the scale is highlighted with a distinct color and labeled with the note name inside the circle.
- Selecting the pentatonic option additionally shows 5 pentatonic patterns, each displayed on a separate fretboard, progressing from the first to the fifth pattern.

### URL Patterns
- The app supports dynamic URL patterns for easy sharing and navigation:
  - `/[scaleType]/[rootNote]/[scale]`
  - Example: `/pentatonic/e/minor` shows the E minor pentatonic scale.

### Home Page
- The index page (`/`) displays all the notes on the fretboard by default.

## Tech Stack

This app is built using modern web technologies:
- **TypeScript**: Ensures type safety and developer productivity.
- **Next.js**: Utilized for its static site generation (SSG) capabilities.
- **Monorepo Structure**: Organizes the codebase for scalability and maintainability.

---

Feel free to open issues or contribute improvements to the repository! 🎸