import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { range } from '@lib/utils/array/range'
import { chromaticNotesNames, chromaticNotesNumber } from '@product/core/note'

import { useChangeTriad } from '../state/triad'
import { useTriad } from '../state/triad'

export const ManageTriadRootNote = () => {
  const { rootNote } = useTriad()
  const setValue = useChangeTriad()

  return (
    <InputContainer>
      <InputLabel>
        Major scale root note: {chromaticNotesNames[rootNote]}
      </InputLabel>
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
