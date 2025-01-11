import {create} from "zustand";


const useAuthStore = create((set) => ({
    isLoggedIn: false,
    user: null,
    setAuthState: (auth) => set({
        isLoggedIn: auth.isLoggedIn,
        user: auth.user,
    }),
}))

export { useAuthStore }