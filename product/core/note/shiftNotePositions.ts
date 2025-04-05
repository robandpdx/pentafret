import { NotePosition } from './NotePosition'

export const shiftNotePositions = (
  positions: NotePosition[],
  offset: number,
) => {
  return positions.map((position) => ({
    ...position,
    fret: position.fret + offset,
  }))
}
