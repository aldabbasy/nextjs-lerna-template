import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LocalizationProvider } from '@/contexts/localizationContext';
import { ThemeProvider } from '@/contexts/themeContext';
import GlobalStyle from '@/styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, user-scalable=no'}
        />
        <title>Next App</title>

        <meta
          name={'description'}
          content={
            "Next.js app. It's a simple app that uses Next.js and Typescript."
          }
        />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <LocalizationProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
