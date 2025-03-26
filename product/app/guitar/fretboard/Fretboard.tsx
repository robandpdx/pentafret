import { hStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { ChildrenProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { range } from '@lib/utils/array/range'
import { Interval } from '@lib/utils/interval/Interval'
import { intervalRange } from '@lib/utils/interval/intervalRange'
import { getFretMarkers } from '@product/core/guitar/fretMarkers'
import styled from 'styled-components'

import { stringsCount } from '../../guitar/config'

import { fretboardConfig } from './config'
import { Fret } from './Fret'
import { FretMarkerItem } from './FretMarkerItem'
import { Nut } from './Nut'
import { VisibleFretsProvider } from './state/visibleFrets'
import { String } from './String'

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
