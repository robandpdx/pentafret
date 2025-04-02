import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { match } from '@lib/utils/match'

import { PageTitle } from '../ui/PageTitle'

import { useCaged } from './state/caged'

export const CagedPageTitle = () => {
  const { view, tonality } = useCaged()
  const viewTitle = `${capitalizeFirstLetter(view)}s`
  const tonalityTitle = capitalizeFirstLetter(tonality)
  const title = `${tonalityTitle} CAGED ${viewTitle} System for Guitar | Master Fretboard Positions`
  const description = `Interactive guide to the ${tonalityTitle} CAGED ${viewTitle.toLowerCase()} system for guitarists. Learn C, A, G, E, D ${match(
    view,
    {
      chord: () => 'chord shapes',
      arpeggio: () => 'arpeggio patterns',
    },
  )} in ${tonalityTitle} to navigate the entire fretboard and improve your playing.`

  return (
    <>
      <PageMetaTags title={title} description={description} />
      <PageTitle>
        CAGED {tonalityTitle} {viewTitle}
      </PageTitle>
    </>
  )
}
