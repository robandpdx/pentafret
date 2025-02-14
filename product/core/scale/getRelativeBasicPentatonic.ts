import { match } from '@lib/utils/match'
import { chromaticNotesNumber } from '../note'
import { BasicScale, basicScales, pentatonicPatterns } from './index'
import { getPairComplement } from '@lib/utils/pair/getPairComplement'

type Pentatonic = {
  scale: BasicScale
  rootNote: number
}

export const getRelativeBasicPentatonic = ({
  scale,
  rootNote,
}: Pentatonic): Pentatonic => {
  const [semitones] = pentatonicPatterns.minor
  const direction = match(scale, {
    minor: () => 1,
    major: () => -1,
  })

  const relativeNote =
    (rootNote + semitones * direction + chromaticNotesNumber) %
    chromaticNotesNumber

  const relativeScale = getPairComplement(basicScales, scale)

  return {
    scale: relativeScale,
    rootNote: relativeNote,
  }
}
