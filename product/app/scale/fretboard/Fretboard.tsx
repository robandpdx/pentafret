import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
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
import { scalePatterns } from '@product/core/scale'
import { Note } from './Note'

const Neck = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  background: ${getColor('foreground')};
  position: relative;
`

const Nut = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  width: ${toSizeUnit(fretboardConfig.nutWidth)};
  background: ${getColor('textShy')};
  position: absolute;
  left: 0;
  top: 0;
`

export const Fretboard = () => {
  const [scale] = useScale()
  const [rootNote] = useRootNote()

  const scaleNotes = getScaleNotes({
    pattern: scalePatterns[scale],
    rootNote,
  })

  return (
    <ElementSizeAware
      render={({ setElement, size }) => (
        <div ref={setElement}>
          {size && size.width && (
            <Neck>
              <Nut />
              {range(stringsCount).map((index) => (
                <String key={index} index={index} />
              ))}
              {range(visibleFrets).map((index) => (
                <Fret key={index} index={index} />
              ))}
              {getFretMarkers(visibleFrets).map((value) => (
                <FretMarkerItem key={value.index} value={value} />
              ))}
              {range(stringsCount).map((string) => {
                const openNote = tuning[string]
                return range(visibleFrets + 1).map((index) => {
                  const note = (openNote + index) % chromaticNotesNumber
                  const fret = index === 0 ? null : index - 1

                  if (scaleNotes.includes(note)) {
                    return (
                      <Note
                        key={`${string}-${note}`}
                        string={string}
                        fret={fret}
                      />
                    )
                  }
                })
              })}
            </Neck>
          )}
        </div>
      )}
    />
  )
}
