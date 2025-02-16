import { NotePosition } from './NotePosition'

type GetNoteFromPositionInput = {
  tuning: number[]
  position: NotePosition
}

export function getNoteFromPosition({
  tuning,
  position,
}: GetNoteFromPositionInput): number {
  const openStringNote = tuning[position.string]

  if (position.fret === -1) {
    return openStringNote
  }

  return (openStringNote + position.fret + 1) % 12
}
