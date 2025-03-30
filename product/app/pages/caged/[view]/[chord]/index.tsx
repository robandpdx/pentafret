import { cagedViews, cagedChords } from '@product/core/chords/caged'
import { GetStaticPaths, GetStaticProps } from 'next'

import { CagedPage } from '../../../../caged/CagedPage'
import { CagedTemplateState } from '../../../../caged/template/state/cagedTemplate'

export default CagedPage

export const getStaticPaths: GetStaticPaths<CagedTemplateState> = async () => {
  const paths = cagedViews.flatMap((view) =>
    cagedChords.map((chord) => ({
      params: {
        view,
        chord,
      },
    })),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { view, chord } = params as CagedTemplateState

  return {
    props: {
      value: {
        view,
        chord,
      },
    },
  }
}
