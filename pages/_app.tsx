import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../redux/store";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-WP9R782",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
