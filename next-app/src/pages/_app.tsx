import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/src/store';

import '@/src/styles/globals.css';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
