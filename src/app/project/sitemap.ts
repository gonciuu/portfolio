import { MetadataRoute } from 'next';

import { defaultUrl, projects } from '../utils/data';

export async function generateSitemaps() {
  return projects;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  return projects.map(() => ({
    url: `${defaultUrl}/project/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));
}
