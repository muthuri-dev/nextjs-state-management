"use client"
import {useCounter} from "@/Store/useCounter";
import FoodBox from "@/components/FoodBox";
import {useFoodStore} from "@/Store/foodStore";
import {useEffect, useState} from "react";

export default function Home() {
    //const {count,increaseCount} = useCounter();
    const count = useCounter((state) => state.count);
    const incrementCount = useCounter((state) => state.increaseCount);

    const [bgColor, setBgColor] = useState<"lightgreen"|"lightpink">("lightpink");
    useEffect(() => {
        const unsubscribe = useFoodStore.subscribe((state, prevState) => {
            // console.log(state, prevState);
            if(prevState.fish <=5 && state.fish >5){
                setBgColor("lightgreen")
            }else if(prevState.fish > 5 && state.fish <=5){
                setBgColor("lightpink");
            }
        });
        return unsubscribe;
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center p-16">
            <h3 className="text-xl font-bold underline"> State Management</h3>
            <p>Counter: {count}</p>
            <button className="p-2 rounded-full hover:bg-green-300"
                    style={{backgroundColor:bgColor}}
                    onClick={() => incrementCount(5)}>Increase count
            </button>
            <FoodBox/>
        </main>
    )
}
