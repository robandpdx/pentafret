import { HStack } from '@lib/ui/css/stack'
import { ManageRootNote } from './ManageRootNote'
import { ManageScale } from './ManageScale'
import { ManageScaleType } from './ManageScaleType'

export const ScaleManager = () => {
  return (
    <HStack alignItems="center" gap={16} fullWidth justifyContent="center">
      <ManageRootNote />
      <ManageScale />
      <ManageScaleType />
    </HStack>
  )
}
