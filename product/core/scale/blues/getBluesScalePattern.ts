import { difference } from '@lib/utils/array/difference'
import { getScaleNotes } from '../getScaleNotes'
import { getPentatonicPattern } from '../pentatonic/getPentatonicPattern'
import { Scale } from '../Scale'
import { scalePatterns } from '../ScaleType'
import { NotePosition } from '../../note/NotePosition'
import { getNoteFromPosition } from '../../note/getNoteFromPosition'

type Input = {
  index: number
  scale: Omit<Scale, 'type'>
  stringsCount: number
  tuning: number[]
}

export const getBluesScalePattern = (input: Input) => {
  const pentatonicPattern = getPentatonicPattern(input)

  const { scale, tuning } = input

  const pentatonicNotes = getScaleNotes({
    rootNote: scale.rootNote,
    pattern: scalePatterns.pentatonic[scale.tonality],
  })

  const bluesNotes = getScaleNotes({
    rootNote: scale.rootNote,
    pattern: scalePatterns.blues[scale.tonality],
  })

  const [blueNote] = difference(pentatonicNotes, bluesNotes)

  const result: NotePosition[] = []

  pentatonicPattern.forEach((position, noteIndex) => {
    result.push(position)

    const note = getNoteFromPosition({ position, tuning })
    if (noteIndex === 0 && note - 1 === blueNote) {
      result.push({
        string: position.string,
        fret: position.fret - 1,
      })
    } else if (
      noteIndex < pentatonicPattern.length - 1 &&
      note + 1 === blueNote
    ) {
      result.push({
        string: position.string,
        fret: position.fret + 1,
      })
    }
  })
}
