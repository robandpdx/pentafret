import { VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'

import { PageContainer } from '../layout/PageContainer'

import { ManageTriadIndex } from './manage/ManageTriadIndex'
import { ManageTriadRootNote } from './manage/ManageTriadRootNote'
import { TriadProvider, TriadState } from './state/triad'
import { TriadPageTitle } from './TriadPageTitle'

export const TriadPage = ({ value }: ValueProp<TriadState>) => (
  <TriadProvider value={value}>
    <PageContainer>
      <VStack gap={60}>
        <VStack gap={20} alignItems="center">
          <VStack alignItems="start" gap={20}>
            <ManageTriadRootNote />
            <ManageTriadIndex />
          </VStack>
        </VStack>
        <TriadPageTitle />
        triads on scale patterns
      </VStack>
    </PageContainer>
  </TriadProvider>
)
