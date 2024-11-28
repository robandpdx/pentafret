import { ComponentWithIndexProps } from '@lib/ui/props'
import { PositionAbsolutelyCenterVertically } from '@lib/ui/layout/PositionAbsolutelyCenterVertically'
import { visibleFretCount } from '../state/guitar'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { toPercents } from '@lib/utils/toPercents'

const Container = styled.div`
  background: ${getColor('textShy')};
  height: 100%;
  width: 1px;
`

export const Fret = ({ index }: ComponentWithIndexProps) => {
  return (
    <PositionAbsolutelyCenterVertically
      fullHeight
      left={toPercents((index + 1) / visibleFretCount)}
    >
      <Container key={index} />
    </PositionAbsolutelyCenterVertically>
  )
}
