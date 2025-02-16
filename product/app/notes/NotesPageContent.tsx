import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber, isNaturalNote } from '@product/core/note'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { stringsCount, tuning, visibleFrets } from '../guitar/config'
import { Note } from '../guitar/fretboard/Note'

export const NotesPageContent = () => {
  return (
    <Fretboard>
      {range(stringsCount).map((string) => {
        const openNote = tuning[string]
        return range(visibleFrets + 1).map((index) => {
          const note = (openNote + index) % chromaticNotesNumber
          const fret = index - 1

          return (
            <Note
              key={`${string}-${index}`}
              string={string}
              fret={fret}
              kind={isNaturalNote(note) ? 'regular' : 'secondary'}
            />
          )
        })
      })}
    </Fretboard>
  )
}
