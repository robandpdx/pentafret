import { ScalePattern } from './ScalePattern'

export const basicScales = ['major', 'minor'] as const
export type BasicScale = (typeof basicScales)[number]

export const scales = [
  ...basicScales,
  'minor',
  'blues',
  'dorian',
  'mixolydian',
  'phrygian',
  'harmonic-minor',
  'melodic-minor',
] as const

export type Scale = (typeof scales)[number]

export const scalePatterns: Record<Scale, ScalePattern> = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  blues: [3, 2, 1, 1, 3, 2],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  ['harmonic-minor']: [2, 1, 2, 2, 1, 3, 1],
  ['melodic-minor']: [2, 1, 2, 2, 2, 2, 1],
}

export const scaleNames: Record<Scale, string> = {
  major: 'Major',
  minor: 'Minor',
  blues: 'Blues',
  dorian: 'Dorian',
  mixolydian: 'Mixolydian',
  phrygian: 'Phrygian',
  ['harmonic-minor']: 'Harmonic Minor',
  ['melodic-minor']: 'Melodic Minor',
}

export const pentatonicPatterns: Record<Scale, ScalePattern> = {
  major: [2, 2, 3, 2, 3],
  minor: [3, 2, 2, 3, 2],
  blues: [3, 2, 1, 3, 2],
  dorian: [2, 3, 2, 2, 3],
  mixolydian: [2, 2, 3, 2, 3],
  phrygian: [1, 3, 2, 3, 2],
  ['harmonic-minor']: [2, 1, 3, 2, 3],
  ['melodic-minor']: [2, 3, 2, 2, 3],
}

export const scaleTypes = ['scale', 'pentatonic'] as const
export type ScaleType = (typeof scaleTypes)[number]

export const pentatonicNotesNumber = 5
