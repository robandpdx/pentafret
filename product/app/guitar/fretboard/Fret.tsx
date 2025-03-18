import { IndexProp } from '@lib/ui/props'
import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { toPercents } from '@lib/utils/toPercents'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { totalFrets } from '../../guitar/config'

const Container = styled.div`
  background: ${getColor('textShy')};
  height: 100%;
  width: 1px;
`

type FretProps = IndexProp & {
  visibleFrets: number
}

export const Fret = ({ index, visibleFrets }: FretProps) => {
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
