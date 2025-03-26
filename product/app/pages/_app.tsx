import { Page } from '@lib/next-ui/Page'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { DarkLightThemeProvider } from '@lib/ui/theme/DarkLightThemeProvider'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { WebsiteLayout } from '../layout/WebsiteLayout'

import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  const component = getLayout(<Component {...pageProps} />)

  return (
    <DarkLightThemeProvider value={'dark'}>
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      <WebsiteLayout>{component}</WebsiteLayout>
    </DarkLightThemeProvider>
  )
}

export default MyApp
