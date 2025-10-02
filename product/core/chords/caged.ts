import { NotePosition } from '../note/NotePosition'
import { Tonality } from '../tonality'

export const cagedViews = ['chord', 'arpeggio'] as const

export type CagedView = (typeof cagedViews)[number]

export const cagedChords = ['c', 'a', 'g', 'e', 'd'] as const

export type CagedChord = (typeof cagedChords)[number]

export const openCagedChords: Record<
  Tonality,
  Record<CagedChord, NotePosition[]>
> = {
  major: {
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
  },
  minor: {
    c: [
      { string: 0, fret: -1 },
      { string: 1, fret: 0 },
      { string: 2, fret: -1 },
      { string: 3, fret: 0 },
      { string: 4, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: 0 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
    ],
    g: [
      { string: 0, fret: 2 },
      { string: 1, fret: 2 },
      { string: 2, fret: -1 },
      { string: 3, fret: -1 },
      { string: 4, fret: 1 },
      { string: 5, fret: 2 },
    ],
    e: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 1 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
    ],
  },
  major7: {
    c: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: 1 },
      { string: 2, fret: 0 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
    ],
    g: [
      { string: 0, fret: 1 },
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
      { string: 3, fret: 0 },
      { string: 4, fret: 1 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 1 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
    ],
  },
  minor7: {
    c: [
      { string: 0, fret: 2 },
      { string: 1, fret: 0 },
      { string: 2, fret: 2 },
      { string: 3, fret: 0 },
      { string: 4, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
    ],
    g: [
      { string: 0, fret: 2 },
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
      { string: 4, fret: 1 },
      { string: 5, fret: 2 },
    ],
    e: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: -1 },
      { string: 4, fret: 1 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
    ],
  },
}

export const cagedArpeggios: Record<
  Tonality,
  Record<CagedChord, NotePosition[]>
> = {
  major: {
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
      { string: 0, fret: -1 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -2 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
      { string: 5, fret: -1 },
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
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: 0 },
      { string: 3, fret: 1 },
      { string: 4, fret: 1 },
      { string: 4, fret: -2 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 1 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 2, fret: -2 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor: {
    c: [
      { string: 0, fret: 2 },
      { string: 1, fret: 3 },
      { string: 1, fret: 0 },
      { string: 2, fret: -1 },
      { string: 3, fret: 0 },
      { string: 4, fret: 2 },
      { string: 5, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: 0 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 2 },
      { string: 4, fret: -1 },
      { string: 5, fret: -1 },
    ],
    g: [
      { string: 0, fret: 2 },
      { string: 1, fret: 2 },
      { string: 2, fret: -1 },
      { string: 2, fret: 2 },
      { string: 3, fret: -1 },
      { string: 4, fret: 0 },
      { string: 5, fret: 2 },
    ],
    e: [
      { string: 0, fret: 2 },
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 1 },
      { string: 5, fret: 2 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 3, fret: 2 },
      { string: 4, fret: -1 },
      { string: 5, fret: 0 },
    ],
  },
  major7: {
    c: [
      { string: 0, fret: -1 },
      { string: 0, fret: 1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 2 },
      { string: 5, fret: -1 },
      { string: 5, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: 1 },
      { string: 2, fret: 0 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
      { string: 5, fret: -1 },
    ],
    g: [
      { string: 0, fret: 1 },
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
      { string: 3, fret: 0 },
      { string: 4, fret: 0 },
      { string: 4, fret: 1 },
      { string: 5, fret: -1 },
    ],
    d: [
      { string: 0, fret: 1 },
      { string: 1, fret: 1 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor7: {
    c: [
      { string: 0, fret: 2 },
      { string: 1, fret: 0 },
      { string: 1, fret: 2 },
      { string: 2, fret: 0 },
      { string: 2, fret: 2 },
      { string: 3, fret: 0 },
      { string: 4, fret: 2 },
    ],
    a: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: 0 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
      { string: 5, fret: -1 },
    ],
    g: [
      { string: 0, fret: 2 },
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
      { string: 4, fret: 0 },
      { string: 4, fret: 1 },
      { string: 5, fret: 2 },
    ],
    e: [
      { string: 0, fret: -1 },
      { string: 1, fret: -1 },
      { string: 2, fret: -1 },
      { string: 3, fret: -1 },
      { string: 4, fret: 0 },
      { string: 4, fret: 1 },
      { string: 5, fret: -1 },
      { string: 5, fret: 0 },
    ],
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 3, fret: 1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 0 },
    ],
  },
}

export const cagedPositions: Record<
  CagedView,
  Record<Tonality, Record<CagedChord, NotePosition[]>>
> = {
  chord: openCagedChords,
  arpeggio: cagedArpeggios,
}

export const cagedTemplateDistances: Record<Tonality, number[]> = {
  major: [3, 2, 3, 2, 2],
  minor: [3, 2, 3, 2, 2],
  major7: [3, 2, 3, 2, 2],
  minor7: [3, 2, 3, 2, 2],
}

export const cagedTemplateOpenChords: Record<
  Tonality,
  Record<CagedChord, NotePosition[]>
> = {
  major: {
    ...openCagedChords.major,
    d: [
      { string: 0, fret: 1 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor: {
    ...openCagedChords.minor,
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 0 },
    ],
  },
  major7: {
    ...openCagedChords.major7,
    d: [
      { string: 0, fret: 1 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor7: {
    ...openCagedChords.minor7,
    d: [
      { string: 0, fret: 0 },
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 0 },
    ],
  },
}

export const cagedTemplateBarreChords: Record<
  Tonality,
  Record<CagedChord, NotePosition[]>
> = {
  major: {
    ...cagedPositions.chord.major,
    d: [
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor: {
    ...cagedPositions.chord.minor,
  },
  major7: {
    ...cagedPositions.chord.major7,
    d: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 1 },
    ],
  },
  minor7: {
    ...cagedPositions.chord.minor7,
    d: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: -1 },
      { string: 4, fret: -1 },
      { string: 5, fret: 0 },
    ],
  },
}
