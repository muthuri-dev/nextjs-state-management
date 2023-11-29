import {create} from "zustand";
import {persist} from "zustand/middleware";

interface Counter {
    count: number
    increaseCount: (by: number) => void
}

export const useCounter = create<Counter>()(persist((set) => ({
    count: 0,
    increaseCount: (by) => set((state) => ({count: state.count + by}))
}), {name: "count"}))