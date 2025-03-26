import { NotePosition } from './NotePosition'

import { chromaticNotesNumber } from '.'

export const normalizeFretPositions = (
  positions: NotePosition[],
): NotePosition[] => {
  if (positions.some((position) => position.fret < -1)) {
    return positions.map((position) => ({
      ...position,
      fret: position.fret + chromaticNotesNumber,
    }))
  }

  return positions
}
