import { HStack, VStack } from '@lib/ui/css/stack'
import { ManageRootNote } from './ManageRootNote'
import { ManageScaleType } from './ManageScaleType'
import { ManageTonality } from './ManageTonality'
export const ScaleManager = () => {
  return (
    <VStack alignItems="center">
      <VStack style={{ maxWidth: 480 }} gap={20} alignItems="start">
        <ManageRootNote />
        <HStack fullWidth justifyContent="space-between" wrap="wrap" gap={20}>
          <ManageScaleType />
          <ManageTonality />
        </HStack>
      </VStack>
    </VStack>
  )
}
