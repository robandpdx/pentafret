import { IndexProp } from '@lib/ui/props'
import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { toPercents } from '@lib/utils/toPercents'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { totalFrets, visibleFrets } from '../../guitar/config'

const Container = styled.div`
  background: ${getColor('textShy')};
  height: 100%;
  width: 1px;
`

export const Fret = ({ index }: IndexProp) => {
  return (
    <PositionAbsolutelyCenterVertically
      fullHeight
      left={toPercents(
        getFretPosition({
          index,
          visibleFrets,
          totalFrets,
        }).end,
      )}
    >
      <Container key={index} />
    </PositionAbsolutelyCenterVertically>
  )
}
