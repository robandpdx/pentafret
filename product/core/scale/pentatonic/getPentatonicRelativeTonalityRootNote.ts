import { match } from '@lib/utils/match'
import { chromaticNotesNumber } from '../../note'
import { Scale } from '../Scale'
import { scalePatterns } from '../ScaleType'

export const getPentatonicRelativeTonalityRootNote = ({
  tonality,
  rootNote,
}: Omit<Scale, 'type'>): number => {
  const [semitones] = scalePatterns.pentatonic.minor
  const direction = match(tonality, {
    minor: () => 1,
    major: () => -1,
  })

  return (
    (rootNote + semitones * direction + chromaticNotesNumber) %
    chromaticNotesNumber
  )
}
