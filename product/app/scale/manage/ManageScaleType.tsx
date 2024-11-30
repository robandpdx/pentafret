import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { scaleTypes } from '@product/core/scale'
import { useChangeScale, useScale } from '../state/scale'

export const ManageScaleType = () => {
  const { scaleType } = useScale()
  const setValue = useChangeScale()

  return (
    <GroupedRadioInput
      options={scaleTypes}
      renderOption={capitalizeFirstLetter}
      value={scaleType}
      onChange={(scaleType) => setValue({ scaleType })}
    />
  )
}
