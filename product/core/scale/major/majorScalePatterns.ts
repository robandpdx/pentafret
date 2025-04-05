import { CagedChord } from '../../chords/caged'
import { NotePosition } from '../../note/NotePosition'

export const majorScalePatterns: NotePosition[][] = [
  [
    { string: 0, fret: 1 },
    { string: 0, fret: -1 },
    { string: 0, fret: -2 },

    { string: 1, fret: 1 },
    { string: 1, fret: -1 },

    { string: 2, fret: 1 },
    { string: 2, fret: 0 },
    { string: 2, fret: -2 },

    { string: 3, fret: 1 },
    { string: 3, fret: 0 },
    { string: 3, fret: -2 },

    { string: 4, fret: 1 },
    { string: 4, fret: -1 },
    { string: 4, fret: -2 },

    { string: 5, fret: 1 },
    { string: 5, fret: -1 },
    { string: 5, fret: -2 },
  ],
  [
    { string: 0, fret: 2 },
    { string: 0, fret: 1 },
    { string: 0, fret: -1 },

    { string: 1, fret: 2 },
    { string: 1, fret: 1 },
    { string: 1, fret: -1 },

    { string: 2, fret: 1 },
    { string: 2, fret: -1 },
    { string: 2, fret: -2 },

    { string: 3, fret: 1 },
    { string: 3, fret: -1 },
    { string: 3, fret: -2 },

    { string: 4, fret: 1 },
    { string: 4, fret: -1 },

    { string: 5, fret: 2 },
    { string: 5, fret: 1 },
    { string: 5, fret: -1 },
  ],
  [
    { string: 0, fret: 2 },
    { string: 0, fret: 0 },
    { string: 0, fret: -1 },

    { string: 1, fret: 2 },
    { string: 1, fret: 0 },
    { string: 1, fret: -1 },

    { string: 2, fret: 1 },
    { string: 2, fret: -1 },

    { string: 3, fret: 2 },
    { string: 3, fret: 1 },
    { string: 3, fret: -1 },

    { string: 4, fret: 2 },
    { string: 4, fret: 1 },
    { string: 4, fret: -1 },

    { string: 5, fret: 2 },
    { string: 5, fret: 0 },
    { string: 5, fret: -1 },
  ],
  [
    { string: 0, fret: -1 },
    { string: 0, fret: 1 },

    { string: 1, fret: 1 },
    { string: 1, fret: 2 },
    { string: 1, fret: -1 },

    { string: 2, fret: 1 },
    { string: 2, fret: 0 },
    { string: 2, fret: -2 },

    { string: 3, fret: 1 },
    { string: 3, fret: -1 },
    { string: 3, fret: -2 },

    { string: 4, fret: 1 },
    { string: 4, fret: -1 },
    { string: 4, fret: -2 },

    { string: 5, fret: 1 },
    { string: 5, fret: -1 },
  ],
  [
    { string: 0, fret: 2 },
    { string: 0, fret: 1 },
    { string: 0, fret: -1 },

    { string: 1, fret: 2 },
    { string: 1, fret: 0 },
    { string: 1, fret: -1 },

    { string: 2, fret: 1 },
    { string: 2, fret: -1 },
    { string: 2, fret: -2 },

    { string: 3, fret: 1 },
    { string: 3, fret: -1 },

    { string: 4, fret: 2 },
    { string: 4, fret: 1 },
    { string: 4, fret: -1 },

    { string: 5, fret: 2 },
    { string: 5, fret: 1 },
    { string: 5, fret: -1 },
  ],
]

export const firstMajorScalePatternChord: CagedChord = 'e'
