import { useQueryParamState } from '@lib/next-ui/hooks/useQueryParamState'

export const usePentatonic = () => {
  return useQueryParamState<boolean>('pentatonic', false)
}
