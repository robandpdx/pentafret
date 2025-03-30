import { NotePosition } from '../note/NotePosition'

export const cagedViews = ['chord', 'arpeggio'] as const

export type CagedView = (typeof cagedViews)[number]

export const cagedChords = ['c', 'a', 'g', 'e', 'd'] as const

export type CagedChord = (typeof cagedChords)[number]

export const openCagedChords: Record<CagedChord, NotePosition[]> = {
  c: [
    { string: 0, fret: -1 },
    { string: 1, fret: 0 },
    { string: 2, fret: -1 },
    { string: 3, fret: 1 },
    { string: 4, fret: 2 },
  ],
  a: [
    { string: 0, fret: -1 },
    { string: 1, fret: 1 },
    { string: 2, fret: 1 },
    { string: 3, fret: 1 },
    { string: 4, fret: -1 },
  ],
  g: [
    { string: 0, fret: 2 },
    { string: 1, fret: -1 },
    { string: 2, fret: -1 },
    { string: 3, fret: -1 },
    { string: 4, fret: 1 },
    { string: 5, fret: 2 },
  ],
  e: [
    { string: 0, fret: -1 },
    { string: 1, fret: -1 },
    { string: 2, fret: 0 },
    { string: 3, fret: 1 },
    { string: 4, fret: 1 },
    { string: 5, fret: -1 },
  ],
  d: [
    { string: 0, fret: 1 },
    { string: 1, fret: 2 },
    { string: 2, fret: 1 },
    { string: 3, fret: -1 },
  ],
}

export const cagedArpeggios: Record<CagedChord, NotePosition[]> = {
  c: [
    { string: 0, fret: -1 },
    { string: 0, fret: 2 },
    { string: 1, fret: 0 },
    { string: 2, fret: -1 },
    { string: 3, fret: 1 },
    { string: 4, fret: 2 },
    { string: 5, fret: -1 },
    { string: 5, fret: 2 },
  ],
  a: [
    { string: 0, fret: 11 },
    { string: 1, fret: 13 },
    { string: 2, fret: 13 },
    { string: 3, fret: 10 },
    { string: 3, fret: 13 },
    { string: 4, fret: 11 },
    { string: 5, fret: 11 },
  ],
  g: [
    { string: 0, fret: 2 },
    { string: 1, fret: -1 },
    { string: 1, fret: 2 },
    { string: 2, fret: -1 },
    { string: 3, fret: -1 },
    { string: 4, fret: 1 },
    { string: 5, fret: 2 },
  ],
  e: [
    { string: 0, fret: 11 },
    { string: 1, fret: 11 },
    { string: 2, fret: 12 },
    { string: 3, fret: 13 },
    { string: 4, fret: 13 },
    { string: 4, fret: 10 },
    { string: 5, fret: 11 },
  ],
  d: [
    { string: 0, fret: 13 },
    { string: 1, fret: 14 },
    { string: 2, fret: 13 },
    { string: 2, fret: 10 },
    { string: 3, fret: 11 },
    { string: 4, fret: 11 },
    { string: 5, fret: 13 },
  ],
}

export const cagedPositions: Record<
  CagedView,
  Record<CagedChord, NotePosition[]>
> = {
  chord: openCagedChords,
  arpeggio: cagedArpeggios,
}

export const cagedTemplateDistances = [3, 2, 3, 2, 3]
