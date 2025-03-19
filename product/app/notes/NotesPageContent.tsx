import { range } from '@lib/utils/array/range'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { stringsCount } from '../guitar/config'
import { Note } from '../guitar/fretboard/Note'
import { scaleConfig } from '../scale/config'

export const NotesPageContent = () => {
  return (
    <Fretboard visibleFrets={scaleConfig.visibleFrets}>
      {range(stringsCount).map((string) => {
        return range(scaleConfig.visibleFrets + 1).map((index) => {
          const fret = index - 1

          return <Note key={`${string}-${index}`} string={string} fret={fret} />
        })
      })}
    </Fretboard>
  )
}
