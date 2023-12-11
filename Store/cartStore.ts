import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {createSelectors} from "@/utils/createSelectors";

type TCartStoreState = {
    cats: {
        bigCats: number
        smallCats: number
    },
    increaseBigCats: () => void
    // decreaseBigCarts:()=>void
    increaseSmallCats: () => void
    // decreaseSmallCarts:()=>void
    summary: () => void
}

export const useCartStore = createSelectors(create<TCartStoreState>()(immer((set,get) => ({
    cats: {
        bigCats: 0,
        smallCats: 0
    },
    increaseBigCats: () =>
        set(
            (state) => {
                state.cats.bigCats++
            }
        ),
    increaseSmallCats: () => set(
        (state) => {
            state.cats.smallCats++
        }
    ),
    summary:()=>{
        const totalCats = get().cats.bigCats + get().cats.smallCats;
        return `There are ${totalCats} cats`
    }
}))))