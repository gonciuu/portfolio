import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

import { projects } from '@/app/utils/data';

import GithubInfo from './(components)/GithubInfo';
import Header from './(components)/Header';
import ProjectData from './(components)/ProjectData';
import ProjectDescription from './(components)/ProjectDescription';
import ProjectImage from './(components)/ProjectImage';
import { CurrentProjectStoreProvider } from './currentProjectStoreProvider';

interface PageProps {
  projectId: string;
}

export default function Page({ params }: { params: Promise<PageProps> }) {
  const projectIdStr = React.use(params).projectId;
  const projectId = parseInt(projectIdStr);

  return (
    <CurrentProjectStoreProvider projectId={projectId}>
      <Header />
      <ProjectData />
      <ProjectImage />
      <ProjectDescription />
      <GithubInfo />
    </CurrentProjectStoreProvider>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<PageProps> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const projectIdStr = (await params).projectId;
  const projectId = parseInt(projectIdStr);
  const project = projects.find((p) => p.id === projectId) || projects[0];

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.name + ' | ' + project.language + ' App',
    description: project.excerpt,
    openGraph: {
      images: [project.image, ...previousImages],
    },
  };
}
