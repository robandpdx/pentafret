import { centerContent } from '@lib/ui/css/centerContent'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { PositionAbsolutelyByCenter } from '@lib/ui/layout/PositionAbsolutelyByCenter'
import { KindProp, ChildrenProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { match } from '@lib/utils/match'
import { toPercents } from '@lib/utils/toPercents'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { chromaticNotesNames } from '@product/core/note'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { NotePosition } from '@product/core/note/NotePosition'
import styled, { css } from 'styled-components'

import { totalFrets } from '../../guitar/config'

import { fretboardConfig } from './config'
import { useVisibleFrets } from './state/visibleFrets'
import { getStringPosition } from './utils/getStringPosition'

export type NoteKind = 'regular' | 'primary' | 'blue'

export type NoteProps = Partial<KindProp<NoteKind> & ChildrenProp> &
  NotePosition

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

export const Note = ({
  string,
  fret,
  kind = 'regular',
  children,
}: NoteProps) => {
  const visibleFrets = useVisibleFrets()

  const top = toPercents(getStringPosition(string))

  const value = getNoteFromPosition({ position: { string, fret } })

  const left = `calc(${
    fret === -1
      ? toSizeUnit(-fretboardConfig.nutWidth)
      : toPercents(
          getFretPosition({ totalFrets, visibleFrets, index: fret }).end,
        )
  } - ${toSizeUnit(fretboardConfig.noteSize / 2 + fretboardConfig.noteFretOffset)})`

  return (
    <PositionAbsolutelyByCenter top={top} left={left}>
      <Container kind={kind}>
        {children ?? chromaticNotesNames[value]}
      </Container>
    </PositionAbsolutelyByCenter>
  )
}
