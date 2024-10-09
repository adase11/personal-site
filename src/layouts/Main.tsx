import { Helmet, HelmetProvider } from 'react-helmet-async';
import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';
import SideBar from '../components/Template/SideBar';

interface MainProps {
  children?: React.ReactNode | React.ReactNode[];
  fullPage?: boolean;
  title?: string;
  description?: string;
}

const Main: React.FC<MainProps> = ({
  children = null,
  fullPage = false,
  title = null,
  description = "Austin Dase's personal website."
}) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Austin Dase"
      defaultTitle="Austin Dase"
      defer={false}
    >
      <meta http-equiv="content-type" content="text/html;charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        id="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta property="og:title" content="Austin Dase" />
      <meta
        property="og:description"
        content="Austin Dase's personal website."
      />

      <meta
        property="og:image"
        content="https://dase.dev/public/images/favicon/web-app-manifest-512x512.png"
      />
      <meta property="og:url" content="https://dase.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Austin Dase" />
      <meta
        name="twitter:description"
        content="Austin Dase's personal website."
      />
      <meta
        name="twitter:image"
        content="https://dase.dev/public/images/favicon/web-app-manifest-512x512.png"
      />
      <link rel="canonical" href="/" />

      <link
        href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900"
        rel="stylesheet"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon/favicon-48x48.png"
        sizes="48x48"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/images/favicon/favicon.svg"
      />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Dase.dev" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{children}</div>
      {!fullPage && <SideBar />}
    </div>
  </HelmetProvider>
);

export default Main;
