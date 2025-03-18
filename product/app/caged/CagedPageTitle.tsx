import { Text } from '@lib/ui/text'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

export const CagedPageTitle = () => {
  const pageTitle = 'CAGED Open Forms on Guitar'
  const title = 'CAGED System on Guitar | Basic Open Position Forms'
  const description =
    'Learn the CAGED system on guitar with our interactive guide. Master the five basic chord forms (C, A, G, E, D) in open position to unlock the entire fretboard.'

  return (
    <>
      <Text centerHorizontally weight={800} size={32} color="contrast" as="h1">
        {pageTitle}
      </Text>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
