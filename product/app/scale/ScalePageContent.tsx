import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber } from '@product/core/note'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { stringsCount, tuning, visibleFrets } from '../guitar/config'
import { Note } from '../guitar/fretboard/Note'
import { scalePatterns, pentatonicPatterns } from '@product/core/scale'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { useScale } from './state/scale'

export const ScalePageContent = () => {
  const { scale, rootNote, scaleType } = useScale()

  const scaleNotes = getScaleNotes({
    pattern: scalePatterns[scale],
    rootNote,
  })

  const pentatonicNotes = getScaleNotes({
    pattern: pentatonicPatterns[scale],
    rootNote,
  })
  return (
    <Fretboard>
      {range(stringsCount).map((string) => {
        const openNote = tuning[string]
        return range(visibleFrets + 1).map((index) => {
          const note = (openNote + index) % chromaticNotesNumber
          const fret = index === 0 ? null : index - 1

          if (scaleNotes.includes(note)) {
            const isSecondaryNote =
              scaleType === 'pentatonic' && !pentatonicNotes.includes(note)

            return (
              <Note
                key={`${string}-${index}`}
                string={string}
                fret={fret}
                value={note}
                kind={isSecondaryNote ? 'secondary' : 'regular'}
              />
            )
          }

          return null
        })
      })}
    </Fretboard>
  )
}
