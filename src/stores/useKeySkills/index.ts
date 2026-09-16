import { create } from 'zustand';

import type { KeySkillsStore } from './index.types';

const useKeySkillsStore = create<KeySkillsStore>((set) => ({
  skills: [],
  updateSkills: (skills) => set(() => ({ skills })),
}));

export default useKeySkillsStore;
