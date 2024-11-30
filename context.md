You will be helping me with tasks related to this product. Read more about it below and reply with "Yes" if you understand the product.

This app allows you to see scales and pentatonics on a Guitar fretboard. At the top of the page there are three controls:
* Root note: Select the root note of the scale, options include all 12 notes.
* Scale: Select the scale, options include Major, Minor, Blues, Dorian, Mixolydian, Phrygian, Harmonic Minor or Melodic Minor.
* Scale type: Select if you want to see the whole scale or just the pentatonic version. When the pentatonic version is selected, the app will grey out the notes that are not part of the pentatonic.

Below the controls, you will see the fretboard with the notes of the selected scale. Fretboard consists of 15 frets with open notes and 6 strings. Each note outlined with a distinct color and has a label with the note name inside the circle.

The url pattern is `/[scaleType]/[rootNote]/[scale]`. For example, `/pentatonic/e/minor` will show the pentatonic scale with E as the root note in the minor scale.

# Tech Stack

The app code is within a TypeScript monorepo. The app is built with NextJS. It doesn't have server-side rendering, and instead uses static site generation.