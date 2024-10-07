import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initialize, pageview, set } from 'react-ga';

// Use NEXT_PUBLIC_ for public environment variables in Next.js
const { NEXT_PUBLIC_GA_TRACKING_ID } = process.env;
const isProduction = process.env.NODE_ENV === 'production';

// Only initialize Google Analytics if in production
if (isProduction && NEXT_PUBLIC_GA_TRACKING_ID) {
  initialize(NEXT_PUBLIC_GA_TRACKING_ID);
}

// Initialize Google Analytics in production
if (isProduction) {
  initialize(NEXT_PUBLIC_GA_TRACKING_ID!);
}

const Analytics = () => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (isProduction) {
      set({ page: pathname });
      pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
