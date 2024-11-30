import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import styled from 'styled-components'
import { fretboardConfig } from './config'
import { getColor } from '@lib/ui/theme/getters'
import { range } from '@lib/utils/array/range'
import { String } from './String'
import { stringsCount, tuning, visibleFrets } from '../state/guitar'
import { Fret } from './Fret'
import { getFretMarkers } from '@product/core/guitar/fretMarkers'
import { FretMarkerItem } from './FretMarkerItem'
import { chromaticNotesNumber } from '@product/core/note'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { useScale } from '../state/scale'
import { useRootNote } from '../state/rootNote'
import { pentatonicPatterns, scalePatterns } from '@product/core/scale'
import { Note } from './Note'
import { usePentatonic } from '../state/pentatonic'
import { hStack } from '@lib/ui/css/stack'

const Neck = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  position: relative;

  ${hStack()};
`

const OpenNotes = styled.div`
  width: ${toSizeUnit(fretboardConfig.openNotesSectionWidth)};
`

const Frets = styled.div`
  position: relative;
  flex: 1;
  background: ${getColor('foreground')};
`

const Nut = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  width: ${toSizeUnit(fretboardConfig.nutWidth)};
  background: ${getColor('textShy')};
`

export const Fretboard = () => {
  const [scale] = useScale()
  const [rootNote] = useRootNote()

  const scaleNotes = getScaleNotes({
    pattern: scalePatterns[scale],
    rootNote,
  })

  const pentatonicNotes = getScaleNotes({
    pattern: pentatonicPatterns[scale],
    rootNote,
  })

  const [pentatonic] = usePentatonic()

  return (
    <Neck>
      <OpenNotes />
      <Nut />
      <Frets>
        {range(visibleFrets).map((index) => (
          <Fret key={index} index={index} />
        ))}
        {getFretMarkers(visibleFrets).map((value) => (
          <FretMarkerItem key={value.index} value={value} />
        ))}

        {range(stringsCount).map((index) => (
          <String key={index} index={index} />
        ))}
        {range(stringsCount).map((string) => {
          const openNote = tuning[string]
          return range(visibleFrets + 1).map((index) => {
            const note = (openNote + index) % chromaticNotesNumber
            const fret = index === 0 ? null : index - 1

            if (scaleNotes.includes(note)) {
              return (
                <Note
                  key={`${string}-${index}`}
                  string={string}
                  fret={fret}
                  value={note}
                  kind={
                    pentatonic
                      ? pentatonicNotes.includes(note)
                        ? 'regular'
                        : 'secondary'
                      : 'regular'
                  }
                />
              )
            }

            return null
          })
        })}
      </Frets>
    </Neck>
  )
}
