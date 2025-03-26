import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { cagedViews } from '@product/core/chords/caged'

import { useChangeCaged, useCaged } from '../state/caged'

export const ManageCagedView = () => {
  const { view } = useCaged()
  const setValue = useChangeCaged()

  return (
    <GroupedRadioInput
      value={view}
      onChange={(view) => setValue({ view })}
      options={cagedViews}
      renderOption={(view) => `${capitalizeFirstLetter(view)}s`}
    />
  )
}
