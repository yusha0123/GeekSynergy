import { create } from "zustand";

interface modalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalStore = create<modalStore>((set) => ({
  isOpen: false,
  additionalData: {},
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));

export default useModalStore;
