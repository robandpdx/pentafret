import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { toUriNote } from '@product/core/note/uriNote'
import { Scale } from '@product/core/scale/Scale'

export const makeScalePath = ({ type, tonality, rootNote }: Scale) =>
  `/scale/${toUriNote(rootNote)}/${type}/${tonality}`

export const { useValue: useScale, provider: ScaleProvider } =
  getValueProviderSetup<Scale>('Scale')

export const useChangeScale = () => {
  const value = useScale()

  const { push } = useRouter()

  return useCallback(
    (params: Partial<Scale>) => {
      push(makeScalePath({ ...value, ...params }))
    },
    [push, value],
  )
}
