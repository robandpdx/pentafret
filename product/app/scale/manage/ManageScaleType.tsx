import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { scaleTypes } from '@product/core/scale'
import { useChangeScale, useScale } from '../state/scale'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'

export const ManageScaleType = () => {
  const { scaleType } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Scale type: {capitalizeFirstLetter(scaleType)}</InputLabel>
      <GroupedRadioInput
        options={scaleTypes}
        renderOption={capitalizeFirstLetter}
        value={scaleType}
        onChange={(scaleType) => setValue({ scaleType })}
      />
    </InputContainer>
  )
}
