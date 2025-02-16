import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { useChangeScale, useScale } from '../state/scale'
import { scaleNames, scales } from '@product/core/scale'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'

export const ManageScale = () => {
  const { scale } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Scale: {scaleNames[scale]}</InputLabel>
      <GroupedRadioInput
        value={scale}
        onChange={(scale) => setValue({ scale })}
        options={scales}
        renderOption={(scale) => scaleNames[scale]}
      />
    </InputContainer>
  )
}
