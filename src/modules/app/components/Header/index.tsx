import NextLink from 'next/link'
import { useLavanda } from '@wpro/lavanda'
import { Box, Container, Stack, Link, Text } from '@chakra-ui/react'
import { Logo } from '../Logo'

export const Header = () => {
  const { path } = useLavanda()

  return (
    <Box as="header" py={{ base: '4', md: '8' }} borderBottomWidth="1px">
      <Container maxW="container.xl">
        <Stack
          spacing="4"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          <Stack spacing="1">
            <NextLink href={path.getHome()} passHref>
              <Link>
                <Logo h="30px" />
              </Link>
            </NextLink>
          </Stack>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text color="gray">Lavanda App</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
