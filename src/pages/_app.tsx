import type { AppProps } from "next/app";
import { GlobalStyles } from "@/components/GlobalStyles";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Noto_Sans as Noto } from "next/font/google";

const noto = Noto({ weight: "400", subsets: ["latin-ext"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Next.js Starter Project | Chkhikvadzeg" />
        <title>Next.js Starter Project | Chkhikvadzeg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Next.js Starter Project | Chkhikvadzeg"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles nextFont={noto} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
