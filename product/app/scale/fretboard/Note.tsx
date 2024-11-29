import { toPercents } from '@lib/utils/toPercents'
import { getStringPosition } from './utils/getStringPosition'
import { getFretPosition } from '@product/core/guitar/getFretPosition'
import { totalFrets, visibleFrets } from '../state/guitar'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { fretboardConfig } from './config'
import styled from 'styled-components'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PositionAbsolutelyByCenter } from '@lib/ui/layout/PositionAbsolutelyByCenter'
import { matchColor } from '@lib/ui/theme/getters'
import { ComponentWithKindProps } from '@lib/ui/props'

type NoteKind = 'regular' | 'secondary'

type NoteProps = Partial<ComponentWithKindProps<NoteKind>> & {
  string: number
  fret: number | null
}

const Container = styled.div<ComponentWithKindProps<NoteKind>>`
  ${round}
  ${sameDimensions(fretboardConfig.noteSize)}
  background: ${matchColor('kind', {
    regular: 'primary',
    secondary: 'foregroundExtra',
  })};
`

export const Note = ({ string, fret, kind = 'regular' }: NoteProps) => {
  const top = toPercents(getStringPosition(string))
  const left = `calc(${toPercents(
    fret === null
      ? 0
      : getFretPosition({ totalFrets, visibleFrets, index: fret }).end,
  )} - ${toSizeUnit(fretboardConfig.noteSize / 2)})`

  return (
    <PositionAbsolutelyByCenter top={top} left={left}>
      <Container kind={kind} />
    </PositionAbsolutelyByCenter>
  )
}
