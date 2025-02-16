import { scalePatterns } from '@product/core/scale'

import { sum } from '@lib/utils/array/sum'
import { match } from '@lib/utils/match'
import { getRelativePentatonic } from '@product/core/scale/pentatonic/getRelativePentatonic'
import { PentatonicScale } from '@product/core/scale'
import { getLastItem } from '@lib/utils/array/getLastItem'
import { range } from '@lib/utils/array/range'
import { getNoteFret } from '@product/core/guitar/getNoteFret'
import { chromaticNotesNumber } from '@product/core/note'
import { NotePosition } from '@product/core/note/NotePosition'

type Input = {
  index: number
  scale: PentatonicScale
  rootNote: number
  stringsCount: number
  tuning: number[]
}

export const getPentatonicPattern = ({
  index,
  scale,
  rootNote,
  stringsCount,
  tuning,
}: Input) => {
  const pattern = scalePatterns['minor-pentatonic']

  const minorRootNote = match(scale, {
    'minor-pentatonic': () => rootNote,
    'major-pentatonic': () =>
      getRelativePentatonic({ scale, rootNote }).rootNote,
  })

  const firstNote =
    (minorRootNote + sum(pattern.slice(0, index))) % chromaticNotesNumber

  const result: NotePosition[] = []

  range(stringsCount * 2).forEach((index) => {
    const string = stringsCount - Math.floor(index / 2) - 1

    const openNote = tuning[string]

    const previousPosition = getLastItem(result)

    const getFret = () => {
      if (!previousPosition) {
        return getNoteFret({ openNote, note: firstNote })
      }

      const step = pattern[(index + index - 1) % pattern.length]

      const fret = previousPosition.fret + step

      if (index % 2 === 0) {
        const shift = string === 1 ? 4 : 5

        return fret - shift
      }

      return fret
    }

    result.push({
      string,
      fret: getFret(),
    })
  })

  if (result.some((position) => position.fret < -1)) {
    return result.map((position) => ({
      ...position,
      fret: position.fret + chromaticNotesNumber,
    }))
  }

  return result
}
