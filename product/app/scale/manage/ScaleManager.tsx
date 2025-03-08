import { VStack } from '@lib/ui/css/stack'
import { ManageRootNote } from './ManageRootNote'
import { ManageScaleType } from './ManageScaleType'
import { ManageTonality } from './ManageTonality'
export const ScaleManager = () => {
  return (
    <VStack alignItems="center">
      <VStack style={{ maxWidth: 480 }} gap={20} alignItems="start">
        <ManageRootNote />
        <ManageScaleType />
        <ManageTonality />
      </VStack>
    </VStack>
  )
}
