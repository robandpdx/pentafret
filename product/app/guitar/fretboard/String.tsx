import { ComponentWithIndexProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'
import { PositionAbsolutelyCenterHorizontally } from '@lib/ui/layout/PositionAbsolutelyCenterHorizontally'
import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import { stringsThickness } from '../../guitar/config'

const Container = styled.div<{ isBassString: boolean }>`
  background: ${({ isBassString }) =>
    isBassString
      ? css`repeating-linear-gradient(135deg, ${getColor('background')}, ${getColor('background')} 1.5px, ${getColor('textSupporting')} 1.5px, ${getColor('textSupporting')} 3px)`
      : css`
          ${getColor('textSupporting')}
        `};
  width: calc(100% + ${toSizeUnit(fretboardConfig.nutWidth)});
  margin-left: ${toSizeUnit(-fretboardConfig.nutWidth)};
  position: relative;
  color: ${getColor('background')};
`

export const String = ({ index }: ComponentWithIndexProps) => {
  const isBassString = index > 2

  return (
    <PositionAbsolutelyCenterHorizontally
      top={toPercents(getStringPosition(index))}
      fullWidth
    >
      <Container
        isBassString={isBassString}
        style={{
          height: fretboardConfig.thickestStringWidth * stringsThickness[index],
        }}
        key={index}
      />
    </PositionAbsolutelyCenterHorizontally>
  )
}
