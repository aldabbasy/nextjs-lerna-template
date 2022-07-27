import { LocalizationProvider } from '@/contexts/localizationContext';
import { ThemeProvider } from '@/contexts/themeContext';
import * as NextImage from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html,
  body {
    width: 100%;
  }
  html,
  body,
  div#root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.surfaceBase};
    text-align: ${({ theme }) => theme.leading};
    font-family: ${({ theme }) => theme.fontFamily} !important;
    direction: ${({ theme }) => theme.direction};
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  & .sb-show-main.sb-main-padded {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.surfaceBase};

  * {
    box-sizing: border-box;
  }
`;

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withAppProviders = (Story, context) => {
  const { locale, theme } = context.globals;
  return (
    <div style={{ height: '100%' }}>
      <LocalizationProvider defaultLocale={locale}>
        <ThemeProvider defaultThemeMode={theme}>
          <GlobalStyle />
          <Wrapper>
            <Story {...context}/>
          </Wrapper>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};

export const decorators = [withAppProviders];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  locale: 'en',
  locales: {
    en: {title: "English", right: '🇺🇸'},
    ar: {title: "Arabic", right: 'العربية'},
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      showName: true,
      dynamicTitle: true,
      items: ['light', 'dark'],
    },
  }
};