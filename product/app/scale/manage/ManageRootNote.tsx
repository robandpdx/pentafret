import { range } from '@lib/utils/array/range'
import { ExpandableSelector } from '@lib/ui/select/ExpandableSelector'
import { chromaticNotesNames, chromaticNotesNumber } from '@product/core/note'
import { useChangeScale, useScale } from '../state/scale'

export const ManageRootNote = () => {
  const { rootNote } = useScale()
  const setValue = useChangeScale()

  return (
    <ExpandableSelector
      value={rootNote}
      onChange={(rootNote) => {
        setValue({ rootNote })
      }}
      options={range(chromaticNotesNumber)}
      getOptionKey={(index) => chromaticNotesNames[index]}
      aria-label="Root note"
    />
  )
}
