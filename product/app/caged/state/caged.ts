import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { CagedChord, CagedView } from '@product/core/chords/caged'
import { Tonality } from '@product/core/tonality'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export type CagedState = {
  view: CagedView
  tonality: Tonality
  chord?: CagedChord
}

export const makeCagedPath = ({ view, chord, tonality }: CagedState) =>
  `/caged/${withoutUndefined([view, tonality, chord]).join('/')}`

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
