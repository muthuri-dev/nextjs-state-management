"use client"
import {useCounter} from "@/Store/useCounter";

export default function Home() {
    //const {count,increaseCount} = useCounter();
    const count = useCounter((state)=>state.count);
    const incrementCount = useCounter((state)=>state.increaseCount);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
     <h3 className="text-xl font-bold underline"> State Management</h3>
        <p>Counter: {count}</p>
        <button className="bg-green-700 p-2 rounded-full hover:bg-green-300" onClick={()=>incrementCount(5)}>Increase count</button>
    </main>
  )
}
