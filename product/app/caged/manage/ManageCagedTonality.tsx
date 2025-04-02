import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { tonalityNames, tonalities } from '@product/core/tonality'

import { useCaged, useChangeCaged } from '../state/caged'

export const ManageCagedTonality = () => {
  const { tonality } = useCaged()
  const setValue = useChangeCaged()

  return (
    <GroupedRadioInput
      value={tonality}
      onChange={(tonality) => setValue({ tonality })}
      options={tonalities}
      renderOption={(tonality) => tonalityNames[tonality]}
    />
  )
}
