import type { AppProps } from 'next/app'
import Script from 'next/script';
import "../styles/font.css";
import GlobalStyle from '../styles/globals';
import {
  RecoilRoot
} from 'recoil';
import { QueryClientProvider, QueryClient } from "react-query"


function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=309d84b98e21aac28e119f5677ce9f42&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <GlobalStyle />
        <Component {...pageProps} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
