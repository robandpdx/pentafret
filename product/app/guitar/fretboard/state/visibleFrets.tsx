import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'

export const { useValue: useVisibleFrets, provider: VisibleFretsProvider } =
  getValueProviderSetup<number>('VisibleFrets')
