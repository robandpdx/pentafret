import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { Interval } from '@lib/utils/interval/Interval'

export const { useValue: useVisibleFrets, provider: VisibleFretsProvider } =
  getValueProviderSetup<Interval>('VisibleFrets')
