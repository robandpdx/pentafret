import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { CagedChord, CagedView } from '@product/core/chords/caged'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export type CagedState = {
  view: CagedView
  chord?: CagedChord
}

export const makeCagedPath = ({ view, chord }: CagedState) =>
  `/caged/${withoutUndefined([view, chord]).join('/')}`

export const { useValue: useCaged, provider: CagedProvider } =
  getValueProviderSetup<CagedState>('Caged')

export const useChangeCaged = () => {
  const value = useCaged()
  const { push } = useRouter()

  return useCallback(
    (params: Partial<CagedState>) => {
      push(makeCagedPath({ ...value, ...params }))
    },
    [push, value],
  )
}
