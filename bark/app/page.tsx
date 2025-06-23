'use client';

import { useEffect } from "react";
import { useState } from "react";

export default function page(){
    useEffect(()=>{
      async function fetchDat(){
        const res = await fetch('http://localhost:3000/api/dogtest')
        const text = await res.text()
        console.log(data)
      }
    },[1])
  return(
    <>
    <h1>{text}</h1>
    </>
)
}