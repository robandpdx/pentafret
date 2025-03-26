import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import { IndexProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { toPercents } from '@lib/utils/toPercents'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import styled from 'styled-components'

import { totalFrets } from '../../guitar/config'

import { useVisibleFrets } from './state/visibleFrets'

const Container = styled.div`
  background: ${getColor('textShy')};
  height: 100%;
  width: 1px;
`

export const Fret = ({ index }: IndexProp) => {
  const visibleFrets = useVisibleFrets()

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
