# Pages

## Notes (/)

The home page displays all the notes on the guitar fretboard.

## Scales (/scales/[scaleType]/[rootNote]/[tonality])

At the top of the scale page, the user can select a scale, which consists of the following controls:
* Root note: Select the root note of the scale. Options include all 12 notes.
* Scale type: Full scale, pentatonic, or blues scale.
* Tonality: Major or Minor.

Below the controls, the fretboard displays the notes of the selected scale. The root note is highlighted in a different color. When the user selects a blues scale, the app also highlights a "blue note" in a distinct color on the fretboard.

The title of the page displays the full name of the scale, e.g., "E Minor Pentatonic Scale".

The subtitle is present for the following scale types:
* Pentatonic: A clickable link to the relative pentatonic scale, e.g., for E minor, it will say "same notes as in G Major Pentatonic Scale" and vice-versa. When clicking on the link, the app will navigate to the relative pentatonic scale.
* Blues: Says that it has the same notes as pentatonic plus a "blue note", e.g., for E Minor Blues Scale, it will say "E Minor Pentatonic Scale + A# (blue note)".

For pentatonic and blues scales, the app also displays 5 standard patterns. Each pattern is shown on a dedicated fretboard, progressing from the first to the fifth pattern. The first pattern starts from the root note in the case of a minor pentatonic scale, and from the next note of the pentatonic scale in the case of a major pentatonic scale. E.g., G minor pentatonic will have the same shape as an A# major pentatonic and will start from the third fret, but the highlighted root note will be different.

## Caged (/caged/[view])

The CAGED page has two views:
* Chords
* Arpeggios

Both views showcase five sections for each of the five basic chord forms: C, A, G, E, and D. Instead of displaying the entire fretboard, we focus on a specific section to illustrate a chord or arpeggio shape.

# Context

* The fretboard always displays 15 frets, plus open notes on the notes and scales pages.
* The app uses 6 strings and standard tuning.
* The app is available at https://pentafret.com

# Tech Stack

The app code is contained within a TypeScript monorepo. It is built with NextJS. The app does not use server-side rendering and instead relies on static site generation.
