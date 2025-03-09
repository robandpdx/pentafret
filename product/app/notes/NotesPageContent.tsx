import { range } from '@lib/utils/array/range'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { stringsCount, visibleFrets } from '../guitar/config'
import { Note } from '../guitar/fretboard/Note'

export const NotesPageContent = () => {
  return (
    <Fretboard>
      {range(stringsCount).map((string) => {
        return range(visibleFrets + 1).map((index) => {
          const fret = index - 1

          return <Note key={`${string}-${index}`} string={string} fret={fret} />
        })
      })}
    </Fretboard>
  )
}
