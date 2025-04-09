import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { range } from '@lib/utils/array/range'
import {
  diatonicTriadsNumber,
  getTriadName,
  triadRomanNumerals,
} from '@product/core/triads'

import { useChangeTriad } from '../state/triad'
import { useTriad } from '../state/triad'

export const ManageTriadIndex = () => {
  const { index } = useTriad()
  const setValue = useChangeTriad()

  return (
    <InputContainer>
      <InputLabel>Triad: {getTriadName(index)}</InputLabel>
      <GroupedRadioInput<number>
        value={index}
        onChange={(index) => setValue({ index })}
        options={range(diatonicTriadsNumber)}
        renderOption={(value) => triadRomanNumerals[value]}
      />
    </InputContainer>
  )
}
