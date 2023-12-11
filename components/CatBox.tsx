"use client"
import React from "react";
import {useCartStore} from "@/Store/cartStore";
import {collectGenerateParams} from "next/dist/build/utils";

export default function Cats() {
    const bigCats = useCartStore(state=>state.cats.bigCats);
    const smallCats = useCartStore(state=>state.cats.smallCats);
    const increaseBigCats = useCartStore(state=>state.increaseBigCats);
    const increaseSmallCats = useCartStore(state=>state.increaseSmallCats);
    const summary = useCartStore(state => state.summary)
    console.log(summary());
    return (
        <div className="border border-green-500 p-3.5">
            <p>Big cats: {bigCats}</p>
            <p>Small cats: {smallCats}</p>
            <div>
                <button className="bg-green-500 p-2 rounded-2xl m-4" onClick={increaseBigCats}>Big cats++</button>
                <button className="bg-green-500 p-2 rounded-2xl" onClick={increaseSmallCats}>Small cats++</button>
            </div>
        </div>
    )
}