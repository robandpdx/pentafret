import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import styled, { css } from 'styled-components'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PositionAbsolutelyByCenter } from '@lib/ui/layout/PositionAbsolutelyByCenter'
import { KindProp } from '@lib/ui/props'
import { centerContent } from '@lib/ui/css/centerContent'
import { chromaticNotesNames } from '@product/core/note'
import { totalFrets, tuning } from '../../guitar/config'
import { match } from '@lib/utils/match'
import { NotePosition } from '@product/core/note/NotePosition'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getColor } from '@lib/ui/theme/getters'
import { useVisibleFrets } from './state/visibleFrets'

export type NoteKind = 'regular' | 'primary' | 'blue'

export type NoteProps = Partial<KindProp<NoteKind>> & NotePosition

const Container = styled.div<KindProp<NoteKind>>`
  ${round}
  ${sameDimensions(fretboardConfig.noteSize)}

  border: 1px solid transparent;
  ${centerContent};
  font-weight: 600;

  ${({ kind, theme: { colors } }) => {
    const color = match(kind, {
      regular: () => colors.getLabelColor(3),
      primary: () => colors.success,
      blue: () => colors.getLabelColor(7),
    })

    if (kind === 'primary') {
      return css`
        background: ${color.toCssValue()};
        color: ${getColor('background')};
      `
    }

    return css`
      border: 1px solid ${color.getVariant({ l: (a) => a * 0.48 }).toCssValue()};
      background: ${color.getVariant({ l: (v) => v * 0.12 }).toCssValue()};
      color: ${color
        .getVariant({ l: (v) => v * 1.2, s: (v) => v * 1.2 })
        .toCssValue()};
    `
  }}
`

export const Note = ({ string, fret, kind = 'regular' }: NoteProps) => {
  const visibleFrets = useVisibleFrets()

  const top = toPercents(getStringPosition(string))

  const value = getNoteFromPosition({ tuning, position: { string, fret } })

  const left = `calc(${
    fret === -1
      ? toSizeUnit(-fretboardConfig.nutWidth)
      : toPercents(
          getFretPosition({ totalFrets, visibleFrets, index: fret }).end,
        )
  } - ${toSizeUnit(fretboardConfig.noteSize / 2 + fretboardConfig.noteFretOffset)})`

  return (
    <PositionAbsolutelyByCenter top={top} left={left}>
      <Container kind={kind}>{chromaticNotesNames[value]}</Container>
    </PositionAbsolutelyByCenter>
  )
}
