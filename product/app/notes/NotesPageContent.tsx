import { range } from '@lib/utils/array/range'
import { intervalRange } from '@lib/utils/interval/intervalRange'

import { stringsCount } from '../guitar/config'
import { defaultVisibleFrets, Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'

export const NotesPageContent = () => {
  return (
    <Fretboard>
      {range(stringsCount).map((string) => {
        return intervalRange(defaultVisibleFrets).map((fret) => {
          return <Note key={`${string}-${fret}`} string={string} fret={fret} />
        })
      })}
    </Fretboard>
  )
}
