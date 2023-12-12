import React from "react";
import {useFoodStore} from "@/Store/foodStore";

export default function FoodBox() {
    const fish = useFoodStore(state=>state.fish);
    const addOneFish = useFoodStore(state=>state.addOneFish);
    const removeOneFish = useFoodStore(state=>state.removeOneFish);
    const removeAllFish = useFoodStore(state=>state.removeAllFish);
    return (
        <div>
           <h3 className=" text-center underline">Food Box</h3> 
            <p>Fish :{fish}</p>
            <div>
                <button className="bg-blue-500 p-4 mr-4" onClick={addOneFish}>Add One Fish</button>
                <button className="bg-blue-500 p-4 mr-4" onClick={removeOneFish}>Remove One Fish</button>
                <button className="bg-blue-500 p-4" onClick={removeAllFish}>Remove All Fish</button>
            </div>
        </div>
    )
}