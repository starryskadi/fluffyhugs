import { create } from "zustand";

const store = (set) => ({
  currentPage: 0,
  changePage: (currentPage) =>
    set((state) => {
      return { ...state, currentPage: currentPage };
    }),
});

const useStore = create(store);

export default useStore;
