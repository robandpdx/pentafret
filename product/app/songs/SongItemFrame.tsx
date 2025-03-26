import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import styled from 'styled-components'

const boxSize = 28

export const SongItemFrame = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: ${toSizeUnit(boxSize)} 1fr;
  line-height: ${toSizeUnit(boxSize)};
`
