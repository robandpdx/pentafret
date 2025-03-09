import { difference } from '@lib/utils/array/difference'
import { getScaleNotes } from '../getScaleNotes'
import { Scale } from '../Scale'
import { scalePatterns } from '../ScaleType'

export const getBlueNote = (scale: Omit<Scale, 'type'>) => {
  const pentatonicNotes = getScaleNotes({
    rootNote: scale.rootNote,
    pattern: scalePatterns.pentatonic[scale.tonality],
  })

  const bluesNotes = getScaleNotes({
    rootNote: scale.rootNote,
    pattern: scalePatterns.blues[scale.tonality],
  })

  const [blueNote] = difference(pentatonicNotes, bluesNotes)

  return blueNote
}
