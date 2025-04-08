import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber } from '@product/core/note'
import { fromUriNote, toUriNote } from '@product/core/note/uriNote'
import { diatonicTriadsNumber } from '@product/core/triads'
import { GetStaticPaths, GetStaticProps } from 'next'

import { TriadPage } from '../../../../triad/TriadPage'

export default TriadPage

type Params = {
  index: string
  rootNote: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = range(chromaticNotesNumber).flatMap((rootNote) =>
    range(diatonicTriadsNumber).map((index) => ({
      params: {
        index: index.toString(),
        rootNote: toUriNote(rootNote),
      },
    })),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rootNote, index } = params as Params

  return {
    props: {
      value: {
        rootNote: fromUriNote(rootNote),
        index: Number(index),
      },
    },
  }
}
