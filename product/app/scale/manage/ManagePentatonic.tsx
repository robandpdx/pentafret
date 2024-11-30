import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { usePentatonic } from '../state/pentatonic'
import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'

const viewOptions = ['scale', 'pentatonic'] as const

export const ManagePentatonic = () => {
  const [value, setValue] = usePentatonic()

  return (
    <GroupedRadioInput
      options={viewOptions}
      renderOption={capitalizeFirstLetter}
      value={value ? 'pentatonic' : 'scale'}
      onChange={(view) => setValue(view === 'pentatonic')}
    />
  )
}
