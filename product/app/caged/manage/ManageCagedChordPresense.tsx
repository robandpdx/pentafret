import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { cagedChords } from '@product/core/chords/caged'

import { useChangeCaged, useCaged } from '../state/caged'

const options = ['overview', 'templates'] as const

export const ManageCagedChordPresense = () => {
  const { chord } = useCaged()
  const setValue = useChangeCaged()

  return (
    <GroupedRadioInput
      value={chord ? 'templates' : 'overview'}
      onChange={(view) => {
        const chord = view === 'overview' ? undefined : cagedChords[0]
        setValue({
          chord,
        })
      }}
      options={options}
      renderOption={(view) => capitalizeFirstLetter(view)}
    />
  )
}
