import { ComponentWithValueProps } from '@lib/ui/props'
import { FretMarker } from '@product/core/guitar/fretMarkers'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'
import { fretboardConfig } from './config'
import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import { toPercents } from '@lib/utils/toPercents'
import { Match } from '@lib/ui/base/Match'
import { Center } from '@lib/ui/layout/Center'
import { vStack } from '@lib/ui/css/stack'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { getIntervalCenter } from '@lib/utils/interval/getIntervalCenter'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { totalFrets, visibleFrets } from '../state/guitar'

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

export const FretMarkerItem = ({
  value,
}: ComponentWithValueProps<FretMarker>) => {
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
