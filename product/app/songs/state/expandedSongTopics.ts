import { guitarTheoryTopics } from '@product/core/songs/GuitarTheoryTopic'
import { PersistentStateKey } from '../../state/persistentState'

import { usePersistentState } from '../../state/persistentState'

const defaultValue = guitarTheoryTopics.slice(0, 1)

export const useExpandedSongTopics = () => {
  return usePersistentState<string[]>(
    PersistentStateKey.ExpandedSongTopics,
    defaultValue,
  )
}
