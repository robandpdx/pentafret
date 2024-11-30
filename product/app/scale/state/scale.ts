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

export const { useValue: useScale, provider: ScaleProvider } =
  getValueProviderSetup<ScaleState>('Scale')

export const useChangeScale = () => {
  const value = useScale()

  const { push } = useRouter()

  return useCallback(
    (params: Partial<ScaleState>) => {
      const { scaleType, scale, rootNote } = { ...value, ...params }

      push(`/${scaleType}/${toUriNote(rootNote)}/${scale}`)
    },
    [push, value],
  )
}
