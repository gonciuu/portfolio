import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kacper | Flutter Mobile App Developer',
    short_name: 'Mobile Flutter App Developer',
    description:
      'I am a Flutter Mobile App Developer with a passion for creating beautiful and functional mobile applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/sygnet.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
