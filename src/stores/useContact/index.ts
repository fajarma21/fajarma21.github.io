import { create } from 'zustand';
import type { ContactStore } from './index.types';

const useContactStore = create<ContactStore>((set) => ({
  data: { cvUrl: '', email: '', linkedinUrl: '' },
  updateContact: (data) => set(() => ({ data })),
}));

export default useContactStore;
