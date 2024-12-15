import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import styled from 'styled-components'

export const PageContainer = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 1600,
  })}

  ${verticalPadding(80)}
`
