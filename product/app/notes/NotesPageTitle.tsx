import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

import { PageTitle } from '../ui/PageTitle'

export const NotesPageTitle = () => {
  const pageTitle = `All Notes on the Guitar Fretboard`
  const title = `All Notes on the Guitar Fretboard | Interactive Guitar Fretboard Chart`
  const description = `Explore all the notes on the guitar fretboard with our interactive diagram. Visualize every note across 15 frets and 6 strings to enhance your guitar learning.`

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
