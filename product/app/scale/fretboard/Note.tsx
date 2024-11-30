import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { totalFrets, visibleFrets } from '../state/guitar'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import styled, { useTheme } from 'styled-components'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PositionAbsolutelyByCenter } from '@lib/ui/layout/PositionAbsolutelyByCenter'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentWithKindProps, ComponentWithValueProps } from '@lib/ui/props'
import { centerContent } from '@lib/ui/css/centerContent'
import { chromaticNotesNames } from '@product/core/note'
import { Text } from '@lib/ui/text'

type NoteKind = 'regular' | 'secondary'

type NoteProps = Partial<ComponentWithKindProps<NoteKind>> &
  ComponentWithValueProps<number> & {
    string: number
    fret: number | null
  }

const Container = styled.div<ComponentWithKindProps<NoteKind>>`
  ${round}
  ${sameDimensions(fretboardConfig.noteSize)}
  background: ${getColor('background')};
  border: 1px solid;
  ${centerContent}
`

export const Note = ({ string, fret, kind = 'regular', value }: NoteProps) => {
  const top = toPercents(getStringPosition(string))

  const {
    colors: { getLabelColor, mistExtra },
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
      <Container
        style={{
          borderColor: (kind === 'regular'
            ? getLabelColor(value)
            : mistExtra
          ).toCssValue(),
        }}
        kind={kind}
      >
        <Text color={kind === 'regular' ? 'contrast' : 'shy'}>
          {chromaticNotesNames[value]}
        </Text>
      </Container>
    </PositionAbsolutelyByCenter>
  )
}
