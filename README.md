# Guitar Scales and Pentatonics Fretboard Viewer

This repository contains the code for an app that allows you to visualize scales and pentatonics on a guitar fretboard. It's a handy tool for musicians, guitar enthusiasts, and learners to explore scales and their corresponding pentatonic patterns interactively.

## Features

### Pages

#### Notes Page (/)
- The home page displays all the notes on the guitar fretboard
- Shows a complete 15-fret, 6-string guitar fretboard with standard tuning

#### Scales Page (/scales/[scaleType]/[rootNote]/[tonality])
At the top of the scale page, you'll find controls to customize your view:
1. **Root Note**: Select the root note of the scale. Options include all 12 notes (e.g., A, B, C#, etc.)
2. **Scale Type**: Choose between:
   - Full scale
   - Pentatonic scale
   - Blues scale
3. **Tonality**: Select between Major or Minor

Below the controls, the fretboard displays the notes of the selected scale.

#### CAGED Page (/caged/[view])
The CAGED page offers two views:
- **Chords**: Displays chord forms for C, A, G, E, and D
- **Arpeggios**: Shows arpeggio patterns for each form

Each view showcases five sections focusing on a specific fretboard section to illustrate chord or arpeggio shapes.

### Fretboard Display
- The app displays a guitar fretboard with 15 frets and 6 strings (plus open notes on the notes and scales pages)
- Each note in the scale is highlighted with a distinct color and labeled with the note name
- The root note is highlighted in a different color
- For blues scales, a "blue note" is highlighted in a distinct color

### Scale Information
- The page title displays the full name of the scale (e.g., "E Minor Pentatonic Scale")
- For pentatonic scales, a subtitle shows a clickable link to the relative pentatonic scale
- For blues scales, the subtitle indicates that it contains the same notes as the pentatonic scale plus a blue note

### Pentatonic Patterns
For pentatonic and blues scales, the app displays 5 standard patterns:
- Each pattern is shown on a dedicated fretboard
- Patterns progress from first to fifth
- For minor pentatonic scales, the first pattern starts from the root note
- For major pentatonic scales, the first pattern starts from the next note of the pentatonic scale

### URL Patterns
- The app supports dynamic URL patterns for easy sharing and navigation:
  - `/scales/[scaleType]/[rootNote]/[tonality]`
  - Example: `/scales/pentatonic/e/minor` shows the E minor pentatonic scale
  - `/caged/[view]` where view is either `chords` or `arpeggios`

## Tech Stack

This app is built using modern web technologies:
- **TypeScript**: Ensures type safety and developer productivity
- **Next.js**: Utilized for its static site generation (SSG) capabilities
- **Monorepo Structure**: Organizes the codebase for scalability and maintainability

The app is available at https://pentafret.com

---

Feel free to open issues or contribute improvements to the repository! 🎸