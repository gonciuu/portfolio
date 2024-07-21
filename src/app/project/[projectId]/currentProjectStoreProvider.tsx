'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  createCurrentProjectStore,
  CurrentProjectStore,
  initCurrentProjectStore,
} from './currentProjectStore';

export type CurrentProjectStoreApi = ReturnType<
  typeof createCurrentProjectStore
>;

export const CurrentProjectStoreContext = createContext<
  CurrentProjectStoreApi | undefined
>(undefined);

export interface CurrentProjectStoreProviderProps {
  children: ReactNode;
  projectId: number;
}

export const CurrentProjectStoreProvider = ({
  children,
  projectId,
}: CurrentProjectStoreProviderProps) => {
  const storeRef = useRef<CurrentProjectStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCurrentProjectStore(
      initCurrentProjectStore(projectId),
    );
  }

  return (
    <CurrentProjectStoreContext.Provider value={storeRef.current}>
      {children}
    </CurrentProjectStoreContext.Provider>
  );
};

export const useCurrentProject = <T,>(
  selector: (store: CurrentProjectStore) => T,
): T => {
  const counterStoreContext = useContext(CurrentProjectStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
