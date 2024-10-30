"use client";

import { useState } from "react";

export default function Home() {
  const [number , setNumber] =  useState(0)
  return (
    <div>
      <h1>Im Counter</h1>
       <h4>{number}</h4> 
      <button onClick={()=> setNumber((prev)=> prev + 1)} >+</button>
      <button onClick={()=> setNumber((prev)=> prev - 1)}>-</button>
    </div>
  );
}
