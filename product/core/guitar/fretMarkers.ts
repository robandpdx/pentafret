import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber } from '../note'

export const fretMarkerTypes = ['single', 'double'] as const
export type FretMarkerType = (typeof fretMarkerTypes)[number]

export type FretMarker = {
  index: number
  type: FretMarkerType
}

export const getFretMarkers = (numberOfFrets: number): FretMarker[] => {
  const markers: FretMarker[] = []

  range(numberOfFrets).forEach((index) => {
    const fretNumber = (index + 1) % chromaticNotesNumber

    if ([3, 5, 7, 9, 12].includes(fretNumber)) {
      markers.push({ index, type: 'single' })
    } else if (fretNumber === 0) {
      markers.push({ index, type: 'double' })
    }
  })

  return markers
}
