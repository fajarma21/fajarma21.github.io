import { create } from 'zustand';
import type { SectionStore } from './index.types';

const useSectionStore = create<SectionStore>((set) => ({
  active: 1,
  updateActiveSection: (data) =>
    set(() => ({
      active: data,
    })),
}));

export default useSectionStore;
