import { HStack, VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'

import { PageContainer } from '../layout/PageContainer'

import { TriadProvider, TriadState } from './state/triad'

export const TriadPage = ({ value }: ValueProp<TriadState>) => (
  <TriadProvider value={value}>
    <PageContainer>
      <VStack gap={60}>
        <VStack gap={20} alignItems="center">
          <HStack wrap="wrap" gap={20}>
            root note selector
          </HStack>
          triad index selector
        </VStack>
        triads on scale patterns
      </VStack>
    </PageContainer>
  </TriadProvider>
)
