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

For the following scale types, the app displays 5 standard patterns:
* Pentatonic: Each pattern is shown on a dedicated fretboard, progressing from the first to the fifth pattern. The first pattern starts from the root note in the case of a minor pentatonic scale, and from the next note of the pentatonic scale in the case of a major pentatonic scale. E.g., G minor pentatonic will have the same shape as an A# major pentatonic and will start from the third fret, but the highlighted root note will be different.
* Major full scale: Similar to pentatonic patterns, the app displays 5 standard patterns for the major full scale. Each pattern is shown on a dedicated fretboard, progressively covering different positions on the neck.
* Blues: Follows the same pattern structure as pentatonic scales with the addition of the blue note highlighted in each pattern.

## Caged (/caged/[view]/[tonality])

The CAGED page has two views:
* Chords
* Arpeggios

And two tonalities:
* Major
* Minor

Both views showcase five sections for each of the five basic chord forms: C, A, G, E, and D. Instead of displaying the entire fretboard, we focus on a specific section to illustrate a chord or arpeggio shape.

Users can switch between views (Chords/Arpeggios) and tonalities (Major/Minor) using the controls at the top of the page.

## Caged Templates (/caged/[view]/[tonality]/[chord])

From the CAGED page, the user can navigate to the Caged Templates page. On that page, the user can select one of the CAGED chords and see the templates for that chord in the selected tonality. Templates are displayed as a series of 6 fretboards, with each fretboard displaying the next chord in the template. E.g. for "CAGED Template C Major Chords" it would be:

- Open C chord
- C ("A form" barre chord)
- C ("G form" barre chord)
- C ("E form" barre chord)
- C ("D form" barre chord)
- C ("C form" barre chord)

The CAGED templates also have an option to view arpeggios. E.g., for "CAGED Template C Major Arpeggios" it would be:

- C arpeggio ("C form")
- C arpeggio ("A form")
- C arpeggio ("G form")
- C arpeggio ("E form")
- C arpeggio ("D form")
- C arpeggio ("C form")

The same pattern applies to minor tonality, showing the appropriate minor chord and arpeggio forms.

## Songs (/songs)

The songs page presents a list of songs organized by guitar theory topics. Users can expand or collapse each topic to view the songs and check off the ones they have learned.

# Context

* The fretboard always displays 15 frets, plus open notes on the notes and scales pages.
* The app uses 6 strings and standard tuning.
* The app is available at https://pentafret.com

# Tech Stack

The app code is contained within a TypeScript monorepo. It is built with NextJS. The app does not use server-side rendering and instead relies on static site generation.
