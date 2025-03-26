import { Tonality } from '../tonality'

import { ScalePattern } from './ScalePattern'

export const scaleTypes = ['full', 'pentatonic', 'blues'] as const
export type ScaleType = (typeof scaleTypes)[number]

export const scalePatterns: Record<
  ScaleType,
  Record<Tonality, ScalePattern>
> = {
  full: {
    major: [2, 2, 1, 2, 2, 2, 1],
    minor: [2, 1, 2, 2, 1, 2, 2],
  },
  pentatonic: {
    major: [2, 2, 3, 2, 3],
    minor: [3, 2, 2, 3, 2],
  },
  blues: {
    major: [2, 1, 1, 3, 2, 3],
    minor: [3, 2, 1, 1, 3, 2],
  },
}

export const scalePatternsNumber = 5
