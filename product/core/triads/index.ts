import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const triadRomanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']

type ChordQuality = 'major' | 'minor' | 'diminished'

export const chordQualities: ChordQuality[] = [
  'major',
  'minor',
  'minor',
  'major',
  'major',
  'minor',
  'diminished',
]

export const diatonicTriadsNumber = triadRomanNumerals.length

export const getTriadName = (index: number) => {
  const numberal = triadRomanNumerals[index]
  const quality = chordQualities[index]

  return [
    numberal,
    quality === 'major' ? capitalizeFirstLetter(quality) : quality,
  ].join(' ')
}
