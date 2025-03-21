import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { useChangeCaged, useCaged } from '../state/caged'
import { cagedViews } from '@product/core/chords/caged'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

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
