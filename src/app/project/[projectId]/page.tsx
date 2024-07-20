import React from 'react';

import GithubInfo from './(components)/GithubInfo';
import Header from './(components)/Header';
import ProjectData from './(components)/ProjectData';
import ProjectDescription from './(components)/ProjectDescription';
import ProjectImage from './(components)/ProjectImage';
import { CurrentProjectStoreProvider } from './currentProjectStoreProvider';

interface PageProps {
  projectId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const projectId = parseInt(params.projectId);

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
