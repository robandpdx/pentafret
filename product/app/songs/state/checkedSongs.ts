import { PersistentStateKey } from '../../state/persistentState'

import { usePersistentState } from '../../state/persistentState'

export const useCheckedSongs = () => {
  return usePersistentState<string[]>(PersistentStateKey.CheckedSongs, [])
}
