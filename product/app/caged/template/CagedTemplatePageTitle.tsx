import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { match } from '@lib/utils/match'

import { PageTitle } from '../../ui/PageTitle'

import { useCagedTemplate } from './state/cagedTemplate'

export const CagedTemplatePageTitle = () => {
  const { view, chord, tonality } = useCagedTemplate()
  const viewTitle = `${capitalizeFirstLetter(view)}s`
  const chordName = chord.toUpperCase()
  const title = `CAGED Template ${chordName} ${capitalizeFirstLetter(tonality)} ${viewTitle}`
  const description = match(view, {
    chord: () =>
      `Learn the CAGED system chord shapes for ${chordName} ${tonality} across the fretboard using the ${chordName} template.`,
    arpeggio: () =>
      `Learn the CAGED system arpeggio patterns for ${chordName} ${tonality} across the fretboard using the ${chordName} template.`,
  })

  return (
    <>
      <PageMetaTags title={title} description={description} />
      <PageTitle>{title}</PageTitle>
    </>
  )
}
