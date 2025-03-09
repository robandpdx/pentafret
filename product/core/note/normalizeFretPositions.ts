import { chromaticNotesNumber } from '.'
import { NotePosition } from './NotePosition'

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
