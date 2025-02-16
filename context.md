You will be helping me with tasks related to this product. Read more about it below and reply with "Yes" if you understand the product.

This app allows you to view scales and pentatonics on a guitar fretboard. At the top of the page, there are three controls:
* **Root Note:** Select the root note of the scale. Options include all 12 notes.
* **Scale:** Select the scale. Options include Major, Minor, Blues, Dorian, Mixolydian, Phrygian, Harmonic Minor, or Melodic Minor.
* **Scale Type:** Choose whether to view the whole scale or just the pentatonic version.

Below the controls, you will see the fretboard with the notes of the selected scale. The fretboard consists of 15 frets with open notes and 6 strings. Each note is outlined with a distinct color and labeled with the note name inside the circle.

When either major or minor pentatonic scale is selected, the app also displays 5 standard pentatonic patterns. Each pattern is shown on a dedicated fretboard, progressing from the first to the fifth pattern. The first pattern starts from the root note in case of minor pentatonic scale, and from the next note of the pentatonic scale in case of major pentatonic scale. E.g. in G minor pentatonic will have the same shape as a A# major pentatonic and will start from the third fret, but the highlighted root note will be different.

The URL pattern is `/[scaleType]/[rootNote]/[scale]`. For example, `/pentatonic/e/minor` displays the pentatonic scale with E as the root note in the minor scale.

On the index page `/`, the app shows all the notes on the fretboard.

# Tech Stack

The app code is contained within a TypeScript monorepo. It is built with NextJS. The app does not use server-side rendering and instead relies on static site generation.
