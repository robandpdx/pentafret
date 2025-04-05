import { NotePosition } from '../../note/NotePosition'
import { Scale } from '../Scale'

type Input = {
  index: number
  scale: Omit<Scale, 'type'>
}

export type PatternResolver = (input: Input) => NotePosition[]
