import { VStack } from '@lib/ui/css/stack'
import { ManageRootNote } from './ManageRootNote'
import { ManageScale } from './ManageScale'

export const ScaleManager = () => {
  return (
    <VStack alignItems="center">
      <VStack style={{ maxWidth: 480 }} gap={20} alignItems="start">
        <ManageRootNote />
        <ManageScale />
      </VStack>
    </VStack>
  )
}
