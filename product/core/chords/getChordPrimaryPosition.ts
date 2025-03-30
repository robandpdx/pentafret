import { order } from '@lib/utils/array/order'

import { tuning } from '../../app/guitar/config'
import { getNoteFromPosition } from '../note/getNoteFromPosition'
import { NotePosition } from '../note/NotePosition'

export const getChordPrimaryPosition = ({
  positions,
  note,
}: {
  positions: NotePosition[]
  note: number
}) =>
  order(positions, (p) => p.string, 'desc').find(
    (position) => getNoteFromPosition({ tuning, position }) === note,
  )
