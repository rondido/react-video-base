import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import create from 'zustand';

const useStore = create((set) =>({
    scratches:0,
    addscratches: () =>set((state)=>({scratches:state.scratches+1})),
}));

export default function Scratches() {
    // const scratches = useStore(state=>state.scratches)
    const scratchesRef = useRef(useStore.getState().scratches);
    const addscratches = useStore(state=>state.addscratches);

    useEffect(()=>{
        useStore.subscribe(
            (scratches)=>{
                scratchesRef = scratches;
            },
            (state)=>state.scratches
        );
    },[])
  return (
    <div>
        {scratchesRef.current}
        <button onClick={addscratches}>Add scrateches</button>
    </div>
  )
}
