"use client"
import React from "react";
import {useBearStore} from "@/Store/bearStore";

export default function BearBox(){
    const bears = useBearStore(state=>state.bears);
    const increasePopulation = useBearStore(state=>state.increasePopulation);
    const removeAllBears = useBearStore(state=>state.removeAllBears);
    const removeSingleBear = useBearStore(state=>state.removeSingleBear);
    return(
        <div className="p-16 justify-center content-center">
            <h3 className="font-bold underline">Bear Box</h3>
            <button className="bg-green-500 py-2 px-4 m-4" onClick={increasePopulation}>Add Bear</button>
            <button className="bg-red-950 py-2 px-4" onClick={removeAllBears}>Remove All Bear</button>
            <button className="bg-blue-600 py-2 px-4" onClick={removeSingleBear}>Remove Bear</button>
            <p>Bears:{bears}</p>
        </div>
    )
}