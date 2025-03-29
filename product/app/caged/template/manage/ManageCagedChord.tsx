import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { cagedChords } from '@product/core/chords/caged'

import { useChangeCaged } from '../../state/caged'
import { useCagedTemplate } from '../state/cagedTemplate'

export const ManageCagedChord = () => {
  const { chord } = useCagedTemplate()
  const setValue = useChangeCaged()

  return (
    <GroupedRadioInput
      value={chord}
      onChange={(chord) => setValue({ chord })}
      options={cagedChords}
      renderOption={(chord) => `${capitalizeFirstLetter(chord)}`}
    />
  )
}
