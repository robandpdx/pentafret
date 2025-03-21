import { chromaticNotesNumber } from '../note'
import { Interval } from '@lib/utils/interval/Interval'
import { intervalRange } from '@lib/utils/interval/intervalRange'

export const fretMarkerTypes = ['single', 'double'] as const
export type FretMarkerType = (typeof fretMarkerTypes)[number]

export type FretMarker = {
  index: number
  type: FretMarkerType
}

export const getFretMarkers = (visibleFrets: Interval): FretMarker[] => {
  const markers: FretMarker[] = []

  intervalRange(visibleFrets).forEach((index) => {
    if (index < 0) {
      return
    }

    const fretNumber = (index + 1) % chromaticNotesNumber

    if ([3, 5, 7, 9, 12].includes(fretNumber)) {
      markers.push({ index, type: 'single' })
    } else if (fretNumber === 0) {
      markers.push({ index, type: 'double' })
    }
  })

  return markers
}
