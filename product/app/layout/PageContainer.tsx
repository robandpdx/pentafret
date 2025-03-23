import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import styled from 'styled-components'

type PageContainerProps = {
  contentMaxWidth?: number
}

export const PageContainer = styled.div<PageContainerProps>`
  ${({ contentMaxWidth = 1600 }) =>
    centeredContentColumn({
      contentMaxWidth,
    })}

  ${verticalPadding(80)}
`
