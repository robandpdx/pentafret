import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { toUriNote } from '@product/core/note/uriNote'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export type TriadState = {
  index: number
  rootNote: number
}

export const makeTriadPath = ({ index, rootNote }: TriadState) =>
  `/triad/${[index, toUriNote(rootNote)].join('/')}`

export const { useValue: useTriad, provider: TriadProvider } =
  getValueProviderSetup<TriadState>('Triad')

export const useChangeTriad = () => {
  const value = useTriad()
  const { push } = useRouter()

  return useCallback(
    (params: Partial<TriadState>) => {
      push(makeTriadPath({ ...value, ...params }))
    },
    [push, value],
  )
}
