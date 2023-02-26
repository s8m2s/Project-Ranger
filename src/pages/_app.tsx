import { AppProps } from 'next/app'
import { Lavanda } from '@wpro/lavanda'
import { theme } from '@modules/chakra'
import { Layout, intlConfig } from '@modules/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Lavanda pageProps={pageProps} intl={intlConfig} theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Lavanda>
  )
}

export default App
