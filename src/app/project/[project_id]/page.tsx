import React from 'react';
import Header from './(components)/Header';
import ProjectData from './(components)/ProjectData';
import ProjectImage from './(components)/ProjectImage';
import ProjectDescription from './(components)/ProjectDescription';
import GithubInfo from './(components)/GithubInfo';

type Props = {};

export default function Page() {
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
