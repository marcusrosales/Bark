'use client';

export default async function page(){
  const res = await fetch('http://localhost:3000/api/dogtest');
  const text = await res.text();

  
  return(
    <>
    <input placeholder="Enter Pokemon:" 
    className="text-7xl border-2 rounded-2xl"
    onChange={()=>console.log('changed!')} 
    ></input>


    <button 
    className="text-7xl border-2 rounded-2xl "
    onClick={()=>console.log('clicked!')}
    >Search</button>


    <h1>{text}</h1>

    </>



)
}