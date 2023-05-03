import { createGlobalStyle } from "styled-components";

interface IGlobalStyles {
  nextFont: {
    className: string;
    style: {
      fontFamily: string;
    };
  };
}

export const GlobalStyles = createGlobalStyle<IGlobalStyles>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ nextFont }) => nextFont.style.fontFamily};

    &::before,
    &::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ nextFont }) => nextFont.style.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.small};
    color: ${({ theme }) => theme.colors.body};
    background-color: ${({ theme }) => theme.colors.background};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.normal};
      line-height: ${({ theme }) => theme.lineHeights.normal};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.body};
  }
`;
