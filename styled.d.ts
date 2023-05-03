import "styled-components";

interface ISpace {
  small: string;
  normal: string;
  medium: string;
  big: string;
  large: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      body: string;
      background: string;
    };
    fontSizes: ISpace;
    fontWeights: {
      regular: number;
      bold: number;
    };
    lineHeights: ISpace;
    gap: ISpace;
    breakpoints: {
      tablet: string;
      desktop: string;
    };
  }
}
