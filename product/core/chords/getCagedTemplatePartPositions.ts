import { rotateArray } from '@lib/utils/array/rotateArray'
import { sum } from '@lib/utils/array/sum'
import { match } from '@lib/utils/match'

import { NotePosition } from '../note/NotePosition'

import {
  CagedChord,
  CagedView,
  cagedChords,
  cagedPositions,
  cagedTemplateBarreChords,
  cagedTemplateDistances,
  cagedTemplateOpenChords,
} from './caged'
import { getCagedTemplateForm } from './getCagedTemplateForm'

type GetCagedTemplatePartPositionsInput = {
  chord: CagedChord
  view: CagedView
  index: number
}

export const getCagedTemplatePartPositions = ({
  chord,
  view,
  index,
}: GetCagedTemplatePartPositionsInput): NotePosition[] => {
  const form = getCagedTemplateForm(chord, index)

  const distances = rotateArray(
    cagedTemplateDistances,
    cagedChords.indexOf(chord),
  )

  const openPositions = match(view, {
    arpeggio: () => cagedPositions.arpeggio[form],
    chord: () => {
      const chords =
        index === 0 ? cagedTemplateOpenChords : cagedTemplateBarreChords

      return chords[form]
    },
  })

  const shift = sum(distances.slice(0, index))

  return openPositions.map((position) => ({
    ...position,
    fret: position.fret + shift,
  }))
}
