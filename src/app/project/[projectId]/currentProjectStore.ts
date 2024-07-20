import { Project, projects } from '@/app/utils/data';
import { createStore } from 'zustand/vanilla';

type Setter = (newState: Partial<CurrentProjectStoreData>) => void;

type CurrentProjectStoreData = {
  currentProjectId: number;
  currentProject: Project;
};

type CurrentProjectStoreActons = {
  setCurrentProjectId: (id: number) => void;
};

export type CurrentProjectStore = CurrentProjectStoreData &
  CurrentProjectStoreActons;

export const defaultInitState: CurrentProjectStoreData = {
  currentProjectId: 0,
  currentProject: projects[0],
};

export const initCurrentProjectStore = (projectId: number) => {
  return {
    currentProjectId: projectId,
    currentProject: projects.find((project) => project.id === projectId),
  } as CurrentProjectStoreData;
};

const setCurrentProject = (set: Setter, projectId: number) => {
  const currentProject = projects.find((project) => project.id === projectId);
  if (!currentProject) return;
  set({ currentProjectId: projectId, currentProject });
};

export const createCurrentProjectStore = (
  initState: CurrentProjectStoreData = defaultInitState,
) => {
  return createStore<CurrentProjectStore>()((set) => ({
    ...initState,
    setCurrentProjectId: (id) => setCurrentProject(set, id),
  }));
};
