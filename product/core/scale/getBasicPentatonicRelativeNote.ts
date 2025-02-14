import { match } from '@lib/utils/match'
import { chromaticNotesNumber } from '../note'
import { BasicScale, pentatonicPatterns } from './index'

type GetBasicPentatonicRelativeNoteParams = {
  scale: BasicScale
  rootNote: number
}

export const getBasicPentatonicRelativeNote = ({
  scale,
  rootNote,
}: GetBasicPentatonicRelativeNoteParams) => {
  const [semitones] = pentatonicPatterns.minor
  const step =
    semitones *
    match(scale, {
      major: () => 1,
      minor: () => -1,
    })

  const relativeNote = (rootNote + step) % chromaticNotesNumber

  return relativeNote
}
