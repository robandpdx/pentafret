export const tonalities = ['major', 'minor', 'major7', 'minor7'] as const
export type Tonality = (typeof tonalities)[number]

export const tonalityNames: Record<Tonality, string> = {
  minor: 'Minor',
  major: 'Major',
  major7: 'Major7',
  minor7: 'Minor7',
}
