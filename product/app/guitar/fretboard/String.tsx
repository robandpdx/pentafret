import { IndexProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'
import { PositionAbsolutelyCenterHorizontally } from '@lib/ui/layout/PositionAbsolutelyCenterHorizontally'
import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import { stringsThickness } from '../../guitar/config'
import { useVisibleFrets } from './state/visibleFrets'

const Container = styled.div<{ isBassString: boolean; showNut: boolean }>`
  background: ${({ isBassString }) =>
    isBassString
      ? css`repeating-linear-gradient(135deg, ${getColor('background')}, ${getColor('background')} 1.5px, ${getColor('textSupporting')} 1.5px, ${getColor('textSupporting')} 3px)`
      : css`
          ${getColor('textSupporting')}
        `};
  ${({ showNut }) =>
    showNut
      ? css`
          width: calc(100% + ${toSizeUnit(fretboardConfig.nutWidth)});
          margin-left: ${toSizeUnit(-fretboardConfig.nutWidth)};
        `
      : css`
          width: 100%;
        `}
  position: relative;
  color: ${getColor('background')};
`

export const String = ({ index }: IndexProp) => {
  const isBassString = index > 2

  const visibleFrets = useVisibleFrets()

  const showNut = visibleFrets.start < 1

  return (
    <PositionAbsolutelyCenterHorizontally
      top={toPercents(getStringPosition(index))}
      fullWidth
    >
      <Container
        showNut={showNut}
        isBassString={isBassString}
        style={{
          height: fretboardConfig.thickestStringWidth * stringsThickness[index],
        }}
        key={index}
      />
    </PositionAbsolutelyCenterHorizontally>
  )
}
