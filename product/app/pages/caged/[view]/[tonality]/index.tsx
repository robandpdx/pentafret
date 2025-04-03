import { CagedPage } from '@product/app/caged/CagedPage'
import { CagedState } from '@product/app/caged/state/caged'
import { cagedViews } from '@product/core/chords/caged'
import { tonalities } from '@product/core/tonality'
import { GetStaticPaths, GetStaticProps } from 'next'

export default CagedPage

export const getStaticPaths: GetStaticPaths<CagedState> = async () => {
  const paths = cagedViews.flatMap((view) =>
    tonalities.map((tonality) => ({
      params: {
        view,
        tonality,
      },
    })),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      value: params as CagedState,
    },
  }
}
