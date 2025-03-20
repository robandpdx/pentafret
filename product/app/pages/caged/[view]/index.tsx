import { GetStaticPaths, GetStaticProps } from 'next'
import { CagedPage } from '../../../caged/CagedPage'
import { cagedViews, CagedView } from '@product/core/chords/caged'

export default CagedPage

type Params = {
  view: CagedView
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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
  const { view } = params as Params

  return {
    props: {
      value: {
        view,
      },
    },
  }
}
