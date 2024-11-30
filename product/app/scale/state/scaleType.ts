import { useQueryParamState } from '@lib/next-ui/hooks/useQueryParamState'
import { ScaleType } from '@product/core/scale'

export const useScaleType = () => {
  return useQueryParamState<ScaleType>('scaleType', 'scale')
}
