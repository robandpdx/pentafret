import { NotePosition } from '../../note/NotePosition'
import { Scale } from '../Scale'

type ScalePatternResolverInput = {
  index: number
  scale: Omit<Scale, 'type'>
}

export type ScalePatternResolver = (
  input: ScalePatternResolverInput,
) => NotePosition[]
