import { VStack } from '@lib/ui/css/stack'

import { PageContainer } from '../layout/PageContainer'

import { NotesPageContent } from './NotesPageContent'
import { NotesPageTitle } from './NotesPageTitle'

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
