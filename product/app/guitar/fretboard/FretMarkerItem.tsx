import { Match } from '@lib/ui/base/Match'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { vStack } from '@lib/ui/css/stack'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { Center } from '@lib/ui/layout/Center'
import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import { ValueProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { getIntervalCenter } from '@lib/utils/interval/getIntervalCenter'
import { toPercents } from '@lib/utils/toPercents'
import { FretMarker } from '@product/core/guitar/fretMarkers'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import styled from 'styled-components'

import { totalFrets } from '../../guitar/config'

import { fretboardConfig } from './config'
import { useVisibleFrets } from './state/visibleFrets'

const Dot = styled.div`
  ${round};
  ${sameDimensions(fretboardConfig.height * 0.12)};
  background: ${getColor('textShy')};
`

const DoubleMarkerContainer = styled.div`
  ${vStack({
    justifyContent: 'space-between',
    fullHeight: true,
  })}
  ${verticalPadding(fretboardConfig.height * 0.08)};
`

type FretMarkerItemProps = ValueProp<FretMarker>

export const FretMarkerItem = ({ value }: FretMarkerItemProps) => {
  const visibleFrets = useVisibleFrets()

  return (
    <PositionAbsolutelyCenterVertically
      fullHeight
      left={toPercents(
        getIntervalCenter(
          getFretPosition({
            index: value.index,
            visibleFrets,
            totalFrets,
          }),
        ),
      )}
    >
      <Match
        value={value.type}
        single={() => (
          <Center>
            <Dot />
          </Center>
        )}
        double={() => (
          <DoubleMarkerContainer>
            <Dot />
            <Dot />
          </DoubleMarkerContainer>
        )}
      />
    </PositionAbsolutelyCenterVertically>
  )
}
