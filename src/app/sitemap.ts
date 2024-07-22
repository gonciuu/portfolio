import { MetadataRoute } from 'next';

import { defaultUrl } from './utils/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: defaultUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
