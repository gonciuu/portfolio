import { MetadataRoute } from 'next';

import { defaultUrl } from './utils/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
