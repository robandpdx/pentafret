import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { VStack } from '@lib/ui/css/stack'
import { NotesPageTitle } from './NotesPageTitle'
import { NotesPageContent } from './NotesPageContent'

const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 1600,
  })}

  ${verticalPadding(80)}
`

export const NotesPage = () => {
  return (
    <Container>
      <VStack gap={80}>
        <NotesPageTitle />
        <NotesPageContent />
      </VStack>
    </Container>
  )
}
