import { ComponentWithIndexProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'
import { PositionAbsolutelyCenterHorizontally } from '@lib/ui/layout/PositionAbsolutelyCenterHorizontally'
import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import { LinesFiller } from '@lib/ui/visual/LinesFiller'
import { stringsThickness } from '../../guitar/config'

const Container = styled.div`
  background: ${getColor('textSupporting')};
  width: calc(100% + ${toSizeUnit(fretboardConfig.nutWidth)});
  margin-left: ${toSizeUnit(-fretboardConfig.nutWidth)};
  position: relative;

  color: ${getColor('background')};
`

export const String = ({ index }: ComponentWithIndexProps) => {
  return (
    <PositionAbsolutelyCenterHorizontally
      top={toPercents(getStringPosition(index))}
      fullWidth
    >
      <Container
        style={{
          height: fretboardConfig.thickestStringWidth * stringsThickness[index],
        }}
        key={index}
      >
        {index > 2 && <LinesFiller lineWidth={1} density={0.2} />}
      </Container>
    </PositionAbsolutelyCenterHorizontally>
  )
}
