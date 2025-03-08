import { Tonality } from '../tonality'
import { ScaleType } from './ScaleType'

export type Scale = {
  type: ScaleType
  tonality: Tonality
  rootNote: number
}
