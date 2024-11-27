import { range } from '@lib/utils/array/range'
import { useRootNote } from '../state/rootNote'
import { ExpandableSelector } from '@lib/ui/select/ExpandableSelector'
import { chromaticNotesNames } from '@product/core/note'

export const ManageRootNote = () => {
  const [value, setValue] = useRootNote()

  return (
    <ExpandableSelector
      value={value}
      onChange={setValue}
      options={range(chromaticNotesNames.length)}
      getOptionKey={(index) => chromaticNotesNames[index]}
    />
  )
}
