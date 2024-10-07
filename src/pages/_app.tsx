import { AppProps } from 'next/app';
import React from 'react';
import '../static/css/main.scss';

// Wrap your app in React.StrictMode if you want strict mode.
const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <Component {...pageProps} />
  </React.StrictMode>
);

export default MyApp;
