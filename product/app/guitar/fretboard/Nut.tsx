import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { fretboardConfig } from './config'

export const Nut = styled.div`
  height: 100%;
  width: ${toSizeUnit(fretboardConfig.nutWidth)};
  background: ${getColor('textShy')};
`
