import { match } from '@lib/utils/match'
import { chromaticNotesNumber } from '../note'
import { getPairComplement } from '@lib/utils/pair/getPairComplement'
import { scalePatterns, pentatonicScales, PentatonicScale } from './index'

type Pentatonic = {
  scale: PentatonicScale
  rootNote: number
}

export const getRelativePentatonic = ({
  scale,
  rootNote,
}: Pentatonic): Pentatonic => {
  const [semitones] = scalePatterns['minor-pentatonic']
  const direction = match(scale, {
    'minor-pentatonic': () => 1,
    'major-pentatonic': () => -1,
  })

  const relativeNote =
    (rootNote + semitones * direction + chromaticNotesNumber) %
    chromaticNotesNumber

  const relativeScale = getPairComplement(pentatonicScales, scale)

  return {
    scale: relativeScale,
    rootNote: relativeNote,
  }
}
