import { ScalePattern } from './ScalePattern'

export const scales = [
  'major',
  'minor',
  'blues',
  'dorian',
  'mixolydian',
  'phrygian',
  'harmonicMinor',
  'melodicMinor',
] as const

export type Scale = (typeof scales)[number]

export const scalePatterns: Record<Scale, ScalePattern> = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  blues: [3, 2, 1, 1, 3, 2],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
  melodicMinor: [2, 1, 2, 2, 2, 2, 1],
}

export const scaleNames: Record<Scale, string> = {
  major: 'Major',
  minor: 'Minor',
  blues: 'Blues',
  dorian: 'Dorian',
  mixolydian: 'Mixolydian',
  phrygian: 'Phrygian',
  harmonicMinor: 'Harmonic Minor',
  melodicMinor: 'Melodic Minor',
}

export const pentatonicPatterns: Record<Scale, ScalePattern> = {
  major: [2, 2, 3, 2, 3],
  minor: [3, 2, 2, 3, 2],
  blues: [3, 2, 1, 3, 2],
  dorian: [2, 3, 2, 2, 3],
  mixolydian: [2, 2, 3, 2, 3],
  phrygian: [1, 3, 2, 3, 2],
  harmonicMinor: [2, 1, 3, 2, 3],
  melodicMinor: [2, 3, 2, 2, 3],
}
