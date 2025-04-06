import { NotePosition } from './NotePosition'
import { shiftNotePositions } from './shiftNotePositions'

import { chromaticNotesNumber } from '.'

export const normalizeFretPositions = (
  positions: NotePosition[],
): NotePosition[] => {
  if (positions.some((position) => position.fret < -1)) {
    return shiftNotePositions(positions, chromaticNotesNumber)
  }

  return positions
}
