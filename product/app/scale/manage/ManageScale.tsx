import { ExpandableSelector } from '@lib/ui/select/ExpandableSelector'
import { useScale } from '../state/scale'
import { scaleNames, scales } from '@product/core/scale'

export const ManageScale = () => {
  const [value, setValue] = useScale()

  return (
    <ExpandableSelector
      value={value}
      onChange={setValue}
      options={scales}
      getOptionKey={(scale) => scaleNames[scale]}
    />
  )
}
