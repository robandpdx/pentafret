import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { range } from '@lib/utils/array/range'
import { chromaticNotesNames, chromaticNotesNumber } from '@product/core/note'

import { useChangeScale, useScale } from '../state/scale'

export const ManageRootNote = () => {
  const { rootNote } = useScale()
  const setValue = useChangeScale()

  return (
    <InputContainer>
      <InputLabel>Root note: {chromaticNotesNames[rootNote]}</InputLabel>
      <GroupedRadioInput
        value={chromaticNotesNames[rootNote]}
        onChange={(noteName) => {
          const index = chromaticNotesNames.indexOf(noteName)
          setValue({ rootNote: index })
        }}
        options={range(chromaticNotesNumber).map(
          (index) => chromaticNotesNames[index],
        )}
        renderOption={(noteName) => noteName}
      />
    </InputContainer>
  )
}
