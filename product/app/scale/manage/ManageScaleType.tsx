import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { scaleTypes } from '@product/core/scale/ScaleType'

import { useChangeScale, useScale } from '../state/scale'

export const ManageScaleType = () => {
  const { type } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Scale: {capitalizeFirstLetter(type)} scale</InputLabel>
      <GroupedRadioInput
        value={type}
        onChange={(type) => setValue({ type })}
        options={scaleTypes}
        renderOption={(type) => capitalizeFirstLetter(type)}
      />
    </InputContainer>
  )
}
