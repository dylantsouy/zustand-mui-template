import create from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    token: null,
    user: {},
    permissionArray: [],
};

export const useAuthStore = create(
    persist(
        (set) => ({
            ...initialState,
            setAuthValue: (key, value) =>
                set(() => ({
                    [key]: value,
                })),
            clear: () => set(initialState),
        }),
        {
            name: 'auth',
            getStorage: () => localStorage,
        }
    )
);
