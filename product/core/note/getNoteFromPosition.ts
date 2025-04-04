import { standardTuning } from '@product/core/guitar/tuning'

import { NotePosition } from './NotePosition'
type GetNoteFromPositionInput = {
  position: NotePosition
}

export function getNoteFromPosition({
  position,
}: GetNoteFromPositionInput): number {
  const openStringNote = standardTuning[position.string]

  if (position.fret === -1) {
    return openStringNote
  }

  return (openStringNote + position.fret + 1) % 12
}
