import { range } from '@lib/utils/array/range'
import { useRootNote } from '../state/rootNote'
import { ExpandableSelector } from '@lib/ui/select/ExpandableSelector'
import { chromaticNotesNames, chromaticNotesNumber } from '@product/core/note'

export const ManageRootNote = () => {
  const [value, setValue] = useRootNote()

  return (
    <ExpandableSelector
      value={value}
      onChange={setValue}
      options={range(chromaticNotesNumber)}
      getOptionKey={(index) => chromaticNotesNames[index]}
    />
  )
}
