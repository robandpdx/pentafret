import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import styled, { css, useTheme } from 'styled-components'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PositionAbsolutelyByCenter } from '@lib/ui/layout/PositionAbsolutelyByCenter'
import { getColor } from '@lib/ui/theme/getters'
import { KindProp, StyledColorProp, ValueProp } from '@lib/ui/props'
import { centerContent } from '@lib/ui/css/centerContent'
import { chromaticNotesNames } from '@product/core/note'
import { totalFrets, visibleFrets } from '../../guitar/config'
import { match } from '@lib/utils/match'

type NoteKind = 'regular' | 'secondary' | 'primary'

type NoteProps = Partial<KindProp<NoteKind>> &
  ValueProp<number> & {
    string: number
    fret: number | null
  }

const Container = styled.div<KindProp<NoteKind> & StyledColorProp>`
  ${round}
  ${sameDimensions(fretboardConfig.noteSize)}

  border: 1px solid transparent;
  ${centerContent};

  ${({ kind, $color, theme: { colors } }) =>
    match(kind, {
      regular: () => css`
        border-color: ${$color.toCssValue()};
        background: ${getColor('background')};
        color: ${getColor('contrast')};
      `,
      secondary: () => css`
        background: ${getColor('foreground')};
        border-color: ${getColor('mistExtra')};
        color: ${getColor('textSupporting')};
      `,
      primary: () => css`
        background: ${$color.toCssValue()};
        color: ${$color
          .getHighestContrast(colors.background, colors.text)
          .toCssValue()};
        font-weight: 600;
      `,
    })}
`

export const Note = ({ string, fret, kind = 'regular', value }: NoteProps) => {
  const top = toPercents(getStringPosition(string))

  const {
    colors: { getLabelColor },
  } = useTheme()

  const left = `calc(${
    fret === null
      ? toSizeUnit(-fretboardConfig.nutWidth)
      : toPercents(
          getFretPosition({ totalFrets, visibleFrets, index: fret }).end,
        )
  } - ${toSizeUnit(fretboardConfig.noteSize / 2 + fretboardConfig.noteFretOffset)})`

  return (
    <PositionAbsolutelyByCenter top={top} left={left}>
      <Container $color={getLabelColor(value)} kind={kind}>
        {chromaticNotesNames[value]}
      </Container>
    </PositionAbsolutelyByCenter>
  )
}
