import Head from 'next/head'
import { ScalePage } from '../scale/ScalePage'
import { makeScalePath, ScaleState } from '../scale/state/scale'

const value: ScaleState = {
  rootNote: 7,
  scale: 'minor',
  scaleType: 'pentatonic',
}

export default () => (
  <>
    <ScalePage value={value} />
    <Head>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${makeScalePath(value)}`}
      />
    </Head>
  </>
)
