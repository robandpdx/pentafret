import { GetStaticPaths, GetStaticProps } from 'next'
import { Scale, scales } from '@product/core/scale'
import { chromaticNotesNumber } from '@product/core/note'
import { toUriNote, fromUriNote } from '@product/core/note/uriNote'
import { range } from '@lib/utils/array/range'
import { ScalePage } from '../../../scale/ScalePage'

export default ScalePage

type Params = {
  rootNote: string
  scale: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = scales.flatMap((scale) =>
    range(chromaticNotesNumber).flatMap((rootNote) => ({
      params: {
        rootNote: toUriNote(rootNote),
        scale,
      },
    })),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rootNote, scale } = params as Params
  const rootNoteNumber = fromUriNote(rootNote)

  return {
    props: {
      value: {
        rootNote: rootNoteNumber,
        scale: scale as Scale,
      },
    },
  }
}
