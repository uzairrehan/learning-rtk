"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrement, increment } from "@/lib/slices/counterSlice";
import { RootState } from "@/lib/store";
import React from "react";

export default function Counter() {
  const counter = useAppSelector((state: RootState) => state?.counter?.count);
  const dispatch = useAppDispatch(); 

  return (
    <div>
      <h1>Counter {counter}</h1>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
