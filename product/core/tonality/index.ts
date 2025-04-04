export const tonalities = ['major', 'minor'] as const
export type Tonality = (typeof tonalities)[number]

export const tonalityNames: Record<Tonality, string> = {
  minor: 'Minor',
  major: 'Major',
}
