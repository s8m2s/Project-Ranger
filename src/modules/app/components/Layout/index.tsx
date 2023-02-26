import { ReactElement } from 'react'
import { Header, Footer } from '@modules/app'
import { Box } from '@chakra-ui/react'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Box>
  )
}
