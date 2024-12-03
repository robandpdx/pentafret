import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber } from '@product/core/note'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { stringsCount, tuning, visibleFrets } from '../guitar/config'
import { Note } from '../guitar/fretboard/Note'
import { scalePatterns, pentatonicPatterns } from '@product/core/scale'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { useScale } from './state/scale'

export const ScaleNotes = () => {
  const { scale, rootNote, scaleType } = useScale()

  const pattern = (
    scaleType === 'pentatonic' ? pentatonicPatterns : scalePatterns
  )[scale]

  const notes = getScaleNotes({
    pattern,
    rootNote,
  })

  return (
    <Fretboard>
      {range(stringsCount).map((string) => {
        const openNote = tuning[string]
        return range(visibleFrets + 1).map((index) => {
          const note = (openNote + index) % chromaticNotesNumber
          const fret = index === 0 ? null : index - 1

          if (notes.includes(note)) {
            return (
              <Note
                key={`${string}-${index}`}
                string={string}
                fret={fret}
                value={note}
              />
            )
          }

          return null
        })
      })}
    </Fretboard>
  )
}
