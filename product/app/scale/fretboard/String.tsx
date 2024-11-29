import { ComponentWithIndexProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'
import { PositionAbsolutelyCenterHorizontally } from '@lib/ui/layout/PositionAbsolutelyCenterHorizontally'
import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'

const Container = styled.div`
  background: ${getColor('textSupporting')};
  width: 100%;
`

export const String = ({ index }: ComponentWithIndexProps) => {
  return (
    <PositionAbsolutelyCenterHorizontally
      top={toPercents(getStringPosition(index))}
      fullWidth
    >
      <Container style={{ height: index + 1 }} key={index} />
    </PositionAbsolutelyCenterHorizontally>
  )
}
