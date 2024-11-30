import { GetStaticPaths, GetStaticProps } from 'next'
import { Scale, scales, ScaleType, scaleTypes } from '@product/core/scale'
import { chromaticNotesNumber } from '@product/core/note'
import { toUriNote, fromUriNote } from '@product/core/note/uriNote'
import { ScalePage } from '../../../../scale/ScalePage'
import { range } from '@lib/utils/array/range'

export default ScalePage

type Params = {
  scaleType: string
  rootNote: string
  scale: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = scaleTypes.flatMap((scaleType) =>
    scales.flatMap((scale) =>
      range(chromaticNotesNumber).flatMap((rootNote) => ({
        params: {
          scaleType,
          rootNote: toUriNote(rootNote),
          scale,
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
  const { scaleType, rootNote, scale } = params as Params
  const rootNoteNumber = fromUriNote(rootNote)

  return {
    props: {
      value: {
        scaleType: scaleType as ScaleType,
        rootNote: rootNoteNumber,
        scale: scale as Scale,
      },
    },
  }
}
