import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create((set) => ({
    setValue: (key, value) =>
        set(() => ({
            [key]: value,
        })),
}));

export const useStorageStore = create(
    persist(
        (set) => ({
            sidebarShow: 'open',
            setSidebarShow: (value) =>
                set(() => ({
                    sidebarShow: value,
                })),
        }),
        {
            name: 'sidebarShow',
            getStorage: () => localStorage,
        }
    )
);
