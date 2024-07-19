'use client';

import React, { useEffect } from 'react';
import Header from './(components)/Header';
import ProjectData from './(components)/ProjectData';
import ProjectImage from './(components)/ProjectImage';
import ProjectDescription from './(components)/ProjectDescription';
import GithubInfo from './(components)/GithubInfo';
import useCurrentProject from './currentProject';
import { useShallow } from 'zustand/react/shallow';

interface PageProps {
  projectId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const projectId = params.projectId;

  const { setCurrentProjectId, isLoading } = useCurrentProject(
    useShallow((state) => ({
      setCurrentProjectId: state.setCurrentProjectId,
      isLoading: state.isLoading,
    })),
  );

  useEffect(() => {
    setCurrentProjectId(parseInt(projectId));
  }, [projectId]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Header />
      <ProjectData />
      <ProjectImage />
      <ProjectDescription />
      <GithubInfo />
    </div>
  );
}
