import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import styled from 'styled-components'
import { fretboardConfig } from './config'
import { getColor } from '@lib/ui/theme/getters'
import { range } from '@lib/utils/array/range'
import { String } from './String'
import { Fret } from './Fret'
import { getFretMarkers } from '@product/core/guitar/fretMarkers'
import { FretMarkerItem } from './FretMarkerItem'
import { hStack } from '@lib/ui/css/stack'
import { stringsCount } from '../../guitar/config'
import { ChildrenProp } from '@lib/ui/props'
import { Nut } from './Nut'
import { VisibleFretsProvider } from './state/visibleFrets'
import { Interval } from '@lib/utils/interval/Interval'
import { intervalRange } from '@lib/utils/interval/intervalRange'

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

type FretboardProps = {
  visibleFrets?: Interval
} & ChildrenProp

export const defaultVisibleFrets: Interval = { start: -1, end: 14 }

export const Fretboard = ({
  children,
  visibleFrets = defaultVisibleFrets,
}: FretboardProps) => {
  const showNut = visibleFrets.start < 1

  const frets = intervalRange(
    showNut
      ? {
          ...visibleFrets,
          start: visibleFrets.start + 1,
        }
      : visibleFrets,
  )

  return (
    <Neck>
      <VisibleFretsProvider value={visibleFrets}>
        {visibleFrets.start < 0 && <OpenNotes />}
        {showNut && <Nut />}
        <Frets>
          {frets.map((index) => (
            <Fret key={index} index={index} />
          ))}
          {getFretMarkers(visibleFrets).map((value) => (
            <FretMarkerItem key={value.index} value={value} />
          ))}

          {range(stringsCount).map((index) => (
            <String key={index} index={index} />
          ))}
          {children}
        </Frets>
      </VisibleFretsProvider>
    </Neck>
  )
}
