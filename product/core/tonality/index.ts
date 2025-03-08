export const tonalities = ['minor', 'major'] as const
export type Tonality = (typeof tonalities)[number]

export const tonalityNames: Record<Tonality, string> = {
  minor: 'Minor',
  major: 'Major',
}
