import {create} from "zustand";

const useJabatanStore = create(set => ({
    data: [],
    setJabatanData: data => set({data}),
}))

export { useJabatanStore }
