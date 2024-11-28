import { scalePatterns } from '../scale'

export const naturalNotesNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

export const chromaticNotesNames = scalePatterns.minor.reduce(
  (acc, step, index) => {
    const note = naturalNotesNames[index]

    acc.push(note)

    if (step === 2) {
      acc.push(`${note}#`)
    }

    return acc
  },
  [] as string[],
)

export const chromaticNotesNumber = chromaticNotesNames.length
