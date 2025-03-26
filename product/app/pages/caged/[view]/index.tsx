import { cagedViews } from '@product/core/chords/caged'
import { GetStaticPaths, GetStaticProps } from 'next'

import { CagedPage } from '../../../caged/CagedPage'
import { CagedState } from '../../../caged/state/caged'

export default CagedPage

export const getStaticPaths: GetStaticPaths<CagedState> = async () => {
  const paths = cagedViews.map((view) => ({
    params: {
      view,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { view } = params as CagedState

  return {
    props: {
      value: {
        view,
      },
    },
  }
}
