import { Box, Container } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" py={{ base: '4', md: '8' }} borderTopWidth="1px">
      <Container role="contentinfo" maxW="container.xl">
        © Copyright Lavanda {new Date().getFullYear()}
      </Container>
    </Box>
  )
}
