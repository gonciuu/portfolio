import { Project, projects } from '@/app/utils/data';
import { create } from 'zustand';

interface CurrentProjectStore {
  isLoading: boolean;
  currentProjectId: number;
  setCurrentProjectId: (id: number) => void;
  currentProject: Project;
}

type Setter = (newState: Partial<CurrentProjectStore>) => void;

const defaultProject = projects[0];

const defaultState: CurrentProjectStore = {
  isLoading: true,
  currentProjectId: defaultProject.id,
  setCurrentProjectId: () => {},
  currentProject: defaultProject,
};

const setCurrentProject = (set: Setter, projectId: number) => {
  set({ isLoading: true });
  const currentProject = projects.find((project) => project.id === projectId);
  if (!currentProject) return;
  set({ currentProjectId: projectId, currentProject, isLoading: false });
};

const useCurrentProject = create<CurrentProjectStore>((set, get) => ({
  ...defaultState,
  setCurrentProjectId: setCurrentProject.bind(this, set),
}));

export default useCurrentProject;
