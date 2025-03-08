import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { useChangeScale, useScale } from '../state/scale'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { scaleTypes } from '@product/core/scale/ScaleType'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const ManageScaleType = () => {
  const { type } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Scale: {capitalizeFirstLetter(type)}</InputLabel>
      <GroupedRadioInput
        value={type}
        onChange={(type) => setValue({ type })}
        options={scaleTypes}
        renderOption={(type) => capitalizeFirstLetter(type)}
      />
    </InputContainer>
  )
}
