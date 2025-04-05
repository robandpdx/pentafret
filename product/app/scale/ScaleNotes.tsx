import { range } from '@lib/utils/array/range'
import { intervalRange } from '@lib/utils/interval/intervalRange'
import { standardTuning } from '@product/core/guitar/tuning'
import { chromaticNotesNumber } from '@product/core/note'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { scalePatterns } from '@product/core/scale/ScaleType'

import { defaultVisibleFrets, Fretboard } from '../guitar/fretboard/Fretboard'

import { ScaleNote } from './ScaleNote'
import { useScale } from './state/scale'

export const ScaleNotes = () => {
  const { type, tonality, rootNote } = useScale()

  const pattern = scalePatterns[type][tonality]

  const notes = getScaleNotes({
    pattern,
    rootNote,
  })

  return (
    <Fretboard>
      {range(standardTuning.length).map((string) => {
        const openNote = standardTuning[string]
        return intervalRange(defaultVisibleFrets).map((fret) => {
          const note = (openNote + fret + 1) % chromaticNotesNumber

          if (notes.includes(note)) {
            return (
              <ScaleNote
                key={`${string}-${fret}`}
                string={string}
                fret={fret}
              />
            )
          }

          return null
        })
      })}
    </Fretboard>
  )
}
