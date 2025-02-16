import { ScalePattern } from './ScalePattern'

export const pentatonicScales = [
  'major-pentatonic',
  'minor-pentatonic',
] as const
export type PentatonicScale = (typeof pentatonicScales)[number]

export const scales = [
  ...pentatonicScales,
  'major',
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
  'major-pentatonic': [2, 2, 3, 2, 3],
  'minor-pentatonic': [3, 2, 2, 3, 2],
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
  'major-pentatonic': 'Major Pentatonic',
  'minor-pentatonic': 'Minor Pentatonic',
  major: 'Major',
  minor: 'Minor',
  blues: 'Blues',
  dorian: 'Dorian',
  mixolydian: 'Mixolydian',
  phrygian: 'Phrygian',
  ['harmonic-minor']: 'Harmonic Minor',
  ['melodic-minor']: 'Melodic Minor',
}
