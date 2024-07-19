import { Project, projects } from '@/app/utils/data';
import { create } from 'zustand';

interface CurrentProjectStore {
  currentProjectId: number;
  setCurrentProjectId: (id: number) => void;
  currentProject: Project;
}

type Setter = (newState: Partial<CurrentProjectStore>) => void;

const defaultProject = projects[0];

const defaultState: CurrentProjectStore = {
  currentProjectId: defaultProject.id,
  setCurrentProjectId: () => {},
  currentProject: defaultProject,
};

const setCurrentProject = (set: Setter, projectId: number) => {
  const currentProject = projects.find((project) => project.id === projectId);
  if (!currentProject) return;
  set({ currentProjectId: projectId, currentProject });
};

const useCurrentProject = create<CurrentProjectStore>((set, get) => ({
  ...defaultState,
  setCurrentProjectId: setCurrentProject.bind(this, set),
}));

export default useCurrentProject;
