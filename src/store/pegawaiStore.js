import {create} from "zustand";

const usePegawaiStore = create(set => ({
    data: [],
    setPegawaiData: data => set({data}),
}))

export { usePegawaiStore }