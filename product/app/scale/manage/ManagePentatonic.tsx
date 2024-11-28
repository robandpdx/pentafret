import { usePentatonic } from '../state/pentatonic'
import { Switch } from '@lib/ui/inputs/Switch'

export const ManagePentatonic = () => {
  const [value, setValue] = usePentatonic()

  return <Switch label="Show pentatonic" value={value} onChange={setValue} />
}
