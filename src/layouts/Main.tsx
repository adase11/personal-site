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
