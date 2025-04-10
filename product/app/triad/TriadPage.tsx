import { VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { range } from '@lib/utils/array/range'
import { scalePatternsNumber } from '@product/core/scale/ScaleType'

import { PageContainer } from '../layout/PageContainer'

import { ManageTriadIndex } from './manage/ManageTriadIndex'
import { ManageTriadRootNote } from './manage/ManageTriadRootNote'
import { TriadProvider, TriadState } from './state/triad'
import { TriadOnMajorScalePattern } from './TriadOnMajorScalePattern'
import { TriadPageTitle } from './TriadPageTitle'

export const TriadPage = ({ value }: ValueProp<TriadState>) => (
  <TriadProvider value={value}>
    <PageContainer>
      <VStack gap={120}>
        <VStack gap={60}>
          <VStack gap={20} alignItems="center">
            <VStack alignItems="start" gap={20}>
              <ManageTriadRootNote />
              <ManageTriadIndex />
            </VStack>
          </VStack>
          <TriadPageTitle />
        </VStack>
        {range(scalePatternsNumber).map((index) => (
          <TriadOnMajorScalePattern key={index} scalePatternIndex={index} />
        ))}
      </VStack>
    </PageContainer>
  </TriadProvider>
)
