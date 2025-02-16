import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { Scale } from '@product/core/scale'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { toUriNote } from '@product/core/note/uriNote'

export type ScaleState = {
  scale: Scale
  rootNote: number
}

export const makeScalePath = ({ scale, rootNote }: ScaleState) =>
  `/${toUriNote(rootNote)}/${scale}`

export const { useValue: useScale, provider: ScaleProvider } =
  getValueProviderSetup<ScaleState>('Scale')

export const useChangeScale = () => {
  const value = useScale()

  const { push } = useRouter()

  return useCallback(
    (params: Partial<ScaleState>) => {
      push(makeScalePath({ ...value, ...params }))
    },
    [push, value],
  )
}
