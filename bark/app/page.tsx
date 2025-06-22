export default async function page(){
  const res = await fetch('http://localhost:3000/api/test', {cache:'no-store'});
  const text = await res.text();
  
  return(
    <>
    <input placeholder="Enter Pokemon: " 
    className="text-7xl border-2 rounded-2xl"
    ></input>
    <button 
    className="text-7xl border-2 rounded-2xl "
    >Search</button>
    </>
  )
}