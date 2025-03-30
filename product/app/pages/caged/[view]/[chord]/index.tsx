import { cagedViews, cagedChords } from '@product/core/chords/caged'
import { GetStaticPaths, GetStaticProps } from 'next'

import { CagedPage } from '../../../../caged/CagedPage'
import { CagedState } from '../../../../caged/state/caged'
import { CagedTemplateState } from '../../../../caged/template/state/cagedTemplate'

export default CagedPage

export const getStaticPaths: GetStaticPaths<
  CagedTemplateState & CagedState
> = async () => {
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
  const { view, chord } = params as CagedTemplateState & CagedState

  return {
    props: {
      value: {
        view,
        chord,
      },
    },
  }
}
