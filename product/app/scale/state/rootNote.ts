import { useQueryParamState } from '@lib/next-ui/hooks/useQueryParamState'

export const useRootNote = () => {
  return useQueryParamState<number>('rootNote', 0)
}
