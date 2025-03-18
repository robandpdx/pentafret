import { WebsiteNavigation } from '@lib/ui/website/navigation/WebsiteNavigation'
import styled from 'styled-components'
import { interactive } from '@lib/ui/css/interactive'
import Link from 'next/link'
import { HStack, VStack } from '@lib/ui/css/stack'
import { OverlayNavigationItem } from '@lib/ui/website/navigation/OverlayNavigationItem'
import { Footer } from '@lib/ui/website/navigation/Footer'
import { Text } from '@lib/ui/text'

import { InteractiveText } from '@lib/ui/text/InteractiveText'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { ChildrenProp } from '@lib/ui/props'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { ProductLogo } from '../product/ProductLogo'
import {
  founderTelegramUrl,
  founderXUrl,
  legalEntity,
  supportEmail,
} from '@product/config'
import { makeScalePath } from '../scale/state/scale'
import { Button } from '@lib/ui/buttons/Button'

const LogoWrapper = styled(Link)`
  ${interactive};
  font-size: 20px;
  display: flex;
`

const items = [
  {
    name: 'Notes',
    href: '/',
  },
  {
    name: 'CAGED',
    href: '/caged',
  },
  {
    name: 'Scales',
    href: makeScalePath({
      rootNote: 7,
      type: 'pentatonic',
      tonality: 'minor',
    }),
  },
] as const

export const WebsiteLayout = ({ children }: ChildrenProp) => {
  const { events } = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleRouteChange = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0)
      }
    }

    events.on('routeChangeComplete', handleRouteChange)

    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <WebsiteNavigation
      ref={containerRef}
      logo={
        <LogoWrapper href="/">
          <ProductLogo />
        </LogoWrapper>
      }
      renderTopbarItems={() => (
        <>
          <div />
          <HStack>
            {items.map(({ name, href }) => (
              <Link key={name} href={href}>
                <Button kind="ghost" as="div">
                  {name}
                </Button>
              </Link>
            ))}
          </HStack>
        </>
      )}
      renderOverlayItems={({ onClose }) => (
        <SeparatedByLine>
          <VStack>
            {items.map(({ name, href }) => (
              <Link key={name} onClick={onClose} href={href}>
                <OverlayNavigationItem as="div">{name}</OverlayNavigationItem>
              </Link>
            ))}
          </VStack>
        </SeparatedByLine>
      )}
      footer={
        <Footer>
          <HStack
            alignItems="center"
            justifyContent="center"
            gap={16}
            fullWidth
            wrap="wrap"
          >
            <Text>
              © {new Date().getFullYear()} {legalEntity}
            </Text>
            <ExternalLink to={`mailto:${supportEmail}`}>
              <InteractiveText>Get in touch</InteractiveText>
            </ExternalLink>
            <ExternalLink to={founderXUrl}>
              <InteractiveText>X</InteractiveText>
            </ExternalLink>
            <ExternalLink to={founderTelegramUrl}>
              <InteractiveText>Telegram</InteractiveText>
            </ExternalLink>
          </HStack>
        </Footer>
      }
    >
      {children}
    </WebsiteNavigation>
  )
}
