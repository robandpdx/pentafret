import { ExpandableSelector } from '@lib/ui/select/ExpandableSelector'
import { useChangeScale, useScale } from '../state/scale'
import { scaleNames, scales } from '@product/core/scale'

export const ManageScale = () => {
  const { scale } = useScale()
  const setValue = useChangeScale()

  return (
    <ExpandableSelector
      value={scale}
      onChange={(scale) => setValue({ scale })}
      options={scales}
      getOptionKey={(scale) => scaleNames[scale]}
      ariaLabel="Scale"
    />
  )
}
