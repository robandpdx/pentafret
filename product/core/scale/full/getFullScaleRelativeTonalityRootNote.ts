import { match } from '@lib/utils/match'

import { chromaticNotesNumber } from '../../note'
import { Scale } from '../Scale'

const semitones = 3

export const getFullScaleRelativeTonalityRootNote = ({
  tonality,
  rootNote,
}: Omit<Scale, 'type'>): number => {
  const direction = match(tonality, {
    minor: () => 1,
    major: () => -1,
    minor7: () => 1,
    major7: () => -1,
  })

  return (
    (rootNote + semitones * direction + chromaticNotesNumber) %
    chromaticNotesNumber
  )
}
