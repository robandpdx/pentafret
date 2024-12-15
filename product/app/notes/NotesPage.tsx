import { VStack } from '@lib/ui/css/stack'
import { NotesPageTitle } from './NotesPageTitle'
import { NotesPageContent } from './NotesPageContent'
import { PageContainer } from '../layout/PageContainer'

export const NotesPage = () => {
  return (
    <PageContainer>
      <VStack gap={80}>
        <NotesPageTitle />
        <NotesPageContent />
      </VStack>
    </PageContainer>
  )
}
