import { GetStaticPaths, GetStaticProps } from 'next'
import { chromaticNotesNumber } from '@product/core/note'
import { toUriNote, fromUriNote } from '@product/core/note/uriNote'
import { range } from '@lib/utils/array/range'
import { ScalePage } from '../../../../../scale/ScalePage'
import { scaleTypes } from '@product/core/scale/ScaleType'
import { tonalities } from '@product/core/tonality'
import { ScaleType } from '@product/core/scale/ScaleType'
import { Tonality } from '@product/core/tonality'

export default ScalePage

type Params = {
  rootNote: string
  type: ScaleType
  tonality: Tonality
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = scaleTypes.flatMap((type) =>
    tonalities.flatMap((tonality) =>
      range(chromaticNotesNumber).map((rootNote) => ({
        params: {
          rootNote: toUriNote(rootNote),
          type,
          tonality,
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
  const { rootNote, type, tonality } = params as Params

  return {
    props: {
      value: {
        rootNote: fromUriNote(rootNote),
        type: type,
        tonality: tonality,
      },
    },
  }
}
