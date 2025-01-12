import {create} from "zustand";

const useUnitKerjaStore = create(set => ({
    data: [],
    setUnitKerjaData: data => set({data}),
}))

export { useUnitKerjaStore }