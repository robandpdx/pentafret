import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { useScaleType } from '../state/scaleType'
import { scaleTypes } from '@product/core/scale'

export const ManageScaleType = () => {
  const [value, setValue] = useScaleType()

  return (
    <GroupedRadioInput
      options={scaleTypes}
      renderOption={capitalizeFirstLetter}
      value={value}
      onChange={setValue}
    />
  )
}
