import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { Scale, ScaleType } from '@product/core/scale'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { toUriNote } from '@product/core/note/uriNote'

export type ScaleState = {
  scale: Scale
  scaleType: ScaleType
  rootNote: number
}

export const makeScalePath = ({ scaleType, scale, rootNote }: ScaleState) =>
  `/${scaleType}/${toUriNote(rootNote)}/${scale}`

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
