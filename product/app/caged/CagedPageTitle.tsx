import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { PageTitle } from '../ui/PageTitle'

export const CagedPageTitle = () => {
  const pageTitle = 'CAGED Open Forms on Guitar'
  const title = 'CAGED System on Guitar | Basic Open Position Forms'
  const description =
    'Learn the CAGED system on guitar with our interactive guide. Master the five basic chord forms (C, A, G, E, D) in open position to unlock the entire fretboard.'

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
