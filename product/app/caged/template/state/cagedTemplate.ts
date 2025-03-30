import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { RequiredFields } from '@lib/utils/types/RequiredFields'
import { useMemo } from 'react'

import { CagedState, useCaged } from '../../state/caged'

export type CagedTemplateState = RequiredFields<CagedState, 'chord'>

export const useCagedTemplate = () => {
  const caged = useCaged()

  return useMemo(
    () => ({
      ...caged,
      chord: shouldBePresent(caged.chord),
    }),
    [caged],
  )
}
