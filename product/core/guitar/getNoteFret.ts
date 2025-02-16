import { chromaticNotesNumber } from '../note'

type Input = {
  openNote: number
  note: number
}

export const getNoteFret = ({ openNote, note }: Input) => {
  if (note === openNote) {
    return -1
  }

  return ((note - openNote + chromaticNotesNumber) % chromaticNotesNumber) - 1
}
