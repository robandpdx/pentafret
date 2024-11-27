import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { ManageRootNote } from './manage/ManageRootNote'

const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 1200,
  })}

  ${verticalPadding(80)}
`

export const ScalePage = () => {
  return (
    <Container>
      <ManageRootNote />
    </Container>
  )
}
