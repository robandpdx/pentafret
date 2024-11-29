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
import { getColor } from '@lib/ui/theme/getters'

type NoteProps = {
  string: number
  fret: number | null
}

const Container = styled.div`
  ${round}
  ${sameDimensions(fretboardConfig.noteSize)}
  background: ${getColor('primary')};
`

export const Note = ({ string, fret }: NoteProps) => {
  const top = toPercents(getStringPosition(string))
  const left = `calc(${toPercents(
    fret === null
      ? 0
      : getFretPosition({ totalFrets, visibleFrets, index: fret }).end,
  )} - ${toSizeUnit(fretboardConfig.noteSize / 2)})`

  return (
    <PositionAbsolutelyByCenter top={top} left={left}>
      <Container />
    </PositionAbsolutelyByCenter>
  )
}
