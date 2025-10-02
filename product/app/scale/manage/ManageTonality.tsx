import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { tonalityNames, basicTonalities } from '@product/core/tonality'

import { useChangeScale, useScale } from '../state/scale'

export const ManageTonality = () => {
  const { tonality } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Tonality: {tonalityNames[tonality]}</InputLabel>
      <GroupedRadioInput
        value={tonality}
        onChange={(tonality) => setValue({ tonality })}
        options={basicTonalities}
        renderOption={(tonality) => tonalityNames[tonality]}
      />
    </InputContainer>
  )
}
