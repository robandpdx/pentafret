import { getLastItem } from '@lib/utils/array/getLastItem'

import { chromaticNotesNumber } from '../note'

import { ScalePattern } from './ScalePattern'

type Input = {
  rootNote: number
  pattern: ScalePattern
}

export const getScaleNotes = ({ rootNote, pattern }: Input): number[] =>
  pattern
    .slice(0, pattern.length - 1)
    .reduce(
      (notes, step) => [
        ...notes,
        (getLastItem(notes) + step) % chromaticNotesNumber,
      ],
      [rootNote],
    )
