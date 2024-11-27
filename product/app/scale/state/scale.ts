import { useQueryParamState } from '@lib/next-ui/hooks/useQueryParamState'
import { Scale } from '@product/core/scale'

export const useScale = () => {
  return useQueryParamState<Scale>('scale', 'minor')
}
