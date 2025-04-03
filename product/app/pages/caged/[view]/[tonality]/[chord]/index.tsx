import { CagedPage } from '@product/app/caged/CagedPage'
import { CagedTemplateState } from '@product/app/caged/template/state/cagedTemplate'
import { cagedViews, cagedChords } from '@product/core/chords/caged'
import { tonalities } from '@product/core/tonality'
import { GetStaticPaths, GetStaticProps } from 'next'

export default CagedPage

export const getStaticPaths: GetStaticPaths<CagedTemplateState> = async () => {
  const paths = cagedViews.flatMap((view) =>
    tonalities.flatMap((tonality) =>
      cagedChords.map((chord) => ({
        params: {
          view,
          tonality,
          chord,
        },
      })),
    ),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      value: params as CagedTemplateState,
    },
  }
}
